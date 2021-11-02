import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #f8f2f5;
    --red: #e52e4d;
    --blue: #5429cc;
    --blue-light: #6933ff;
    --green: #33cc95;
    --text-title: #363f5f;
    --text-body: #969cb3;

    --shape: #FFFFFF

  }

  *  {
   margin: 0;
  padding: 0;
  box-sizing: border-box;
  }
  
  //font-size padrão de desktop é 16px
  html {
    @media (max-width: 1080px) {
      font-size: 93.75% //15px
    }

    @media (max-width: 720px){
      font-size: 87.5%//14px
    }
  }

  // REM = 1rem =16px = tamanho do font-size da pagina e o REM se adapta a tela do usuario
  // usar percentual para as configurações do usuario possa funcionar (maior ou menor o tamanho)

  //* input, textarea e button tem sua propria estilização e não herda do body
  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased
    // * utilize para deixar a font mais nitida e bonita!
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .react-modal-overlay{
    background: rgba(0,0,0,0.5); //ficar escurinho

    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }
  .react-modal-content{
    width: 100%; //se a tela for menor que 576, ele ocupa o máxmo dessa tela
    max-width: 576px; //se a tela for maior, ele não passa disso
    background: var(--background);
    padding: 3rem;
    position: relative;
    border-radius: 0.24rem;
  }

  .react-modal-close {
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.6);
    }

  }
`;
