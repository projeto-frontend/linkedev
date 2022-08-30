import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`

:root{
  //primary colors
  --primary-color: #A54BDC;
  --primary-focus-color: #5B2E76;
  --primary-2-color: #3E1E51;
  --primary-2-focus-color: #BF90DC;


  //gray scale
  --gray-color-0:#fff;
  --gray-color-1:#9C95A0;
  --gray-color-2:#29262C;
  --gray-color-3:#131213;

  //feedback palette
  --sucess-color:#48AD18;
  --negative-color:#FA5640;

  font-size: 60%;
}

@media (min-width: 700px) {
    :root {
      font-size: 62.5%;
      font-family: 'Montserrat', sans-serif;
    }
  }

  *{
    margin:0px;
    padding: 0px;
    outline: 0px;
    box-sizing: border-box;
  }

  body, html{
    width: 100vw;
    height: 100vh;
  }

  body{
    background: var(--gray-color-4);
    color: var(--gray-color-0);
    -webkit-font-smoothing: antialiased;

    overflow-x: hidden;
  }

  border-style, input, button, textarea {
    font-family: 'Montserrat', sans-serif;
    font-size: 1.6rem;
  }

  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 500;
  } 

  button{
    cursor: pointer;
  }

  ::-webkit-scrollbar{
    width: 10px;
  }

  ::-webkit-scrollbar-track{
    background: var(--gray-color-1);
    margin: 1rem;
    border-radius: 1.6rem;
  }

  ::-webkit-scrollbar-thumb{
    background: var(--primary-negative-color);
    border-radius: 1.6rem;
  }

  ::-webkit-scrollbar-thumb:hover{
    background: var(--primary-focus-color);
  }
`;

export default Global;
