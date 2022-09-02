import { useState, ReactNode, createContext, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../../services/api";
//import { getLinkeDev } from "../../Services/LinkeDev";

interface IRecruiterProps {
  user: IRecruiter[] | [] | string;
  setUser: (user: IRecruiter[] | [] | string) => void;
  handleRegister: (data: IHandleRegister) => void;
  handleLogin: (data: IHandleLogin) => void;
  loading: boolean;
}

export interface IRecruiter {
  name: string;
  email: string;
  password: string;
  company: string;
  social: string;
  avatar_URL: string;
  is_recruiter: boolean;
  level: string;
  stacks: string[];
  bio: string;
  title: string;
}

export interface IHandleRegister {
  name: string;
  email: string;
  password: string;
  company?: string;
  social?: string;
  avatar_URL?: string;
  is_recruiter?: boolean;
  level?: string;
  stacks?: string[];
  bio?: string;
  title?: string;
}

export interface IHandleLogin {
  email: string;
  password: string;
}
interface IProviderChildren {
  children: ReactNode;
}

export const RecruiterContext = createContext<IRecruiterProps>(
  {} as IRecruiterProps
);
const RecruiterProvider = ({ children }: IProviderChildren) => {
  const [user, setUser] = useState<IRecruiter[] | string>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  const handleRegister = (data: IHandleRegister) => {
    api
      .post("/register", data)
      .then((response) => {
        console.log(response.data);
        toast.success("Cadastro realizado com sucesso!");
        navigate("/login", { replace: true });
      })
      .catch((err) => {
        console.log(err);
        toast.error("ops! algo deu errado");
      });
  };

  useEffect(() => {
    async function autoLogin() {
      const token = window.localStorage.getItem("@linkeDev: Recruitertoken");

      if (token) {
        try {
          const { data } = await api.get("profile", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setUser(data);
        } catch (err) {
          console.log(err);
          localStorage.removeItem("@linkeDev: Recruitertoken");
        }
        setLoading(false);
      }
    }
    autoLogin();
  }, []);

  const handleLogin = (data: IHandleLogin) => {
    api
      .post("/login", data)
      .then((response) => {
        // console.log(response.data);
        window.localStorage.setItem(
          "@linkeDev: Recruitertoken ",
          response.data.accessToken
        );
        setUser(response.data.user);

        if (response.data.user.company !== undefined) {
          toast.success("login realizado com sucesso");
          setTimeout(
            () => navigate("/recruiterDashboard", { replace: true }),
            3000
          );
        } else {
          toast.success("login realizado com sucesso");
          setTimeout(() => navigate("/devDashboard", { replace: true }), 3000);
        }
      })
      .catch((err) => {
        // console.log(err);
        toast.error("email ou senha inválido");
      });
  };

  return (
    <RecruiterContext.Provider
      value={{
        user,
        setUser,
        loading,
        handleRegister,
        handleLogin,
      }}
    >
      {children}
    </RecruiterContext.Provider>
  );
};

export default RecruiterProvider;
