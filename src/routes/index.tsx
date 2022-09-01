import { Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import DevDashboard from "../pages/DevDashboard";
import RecruiterDashboard from "../pages/RecruiterDashboard";
import Login from "../pages/login";
import RecruiterForm from "../components/RegisterRecruiterForm";

const RoutesApplication = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/register" element={<RecruiterForm />} />
      <Route path="/devDashboard" element={<DevDashboard />} />
      <Route path="/recruiterDashboard" element={<RecruiterDashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Navigate replace to="/login" />} />
    </Routes>
  );
};

export default RoutesApplication;
