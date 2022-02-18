import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root{
  --background: #e5e5e5;
  --blue:#034AFD;
  --green:#1DD195;
  --green-light:#B5F1DD;
  --green-gradient:#1ECAAF;
  --white:#fff;
  --text:#587169;
  --text-dark:#34423D;
  --text-light:#A3B8B0; 
  --disabled:#EAEFED;
  --icon-light:#A5ABB3;
}

*{margin: 0;
  padding: 0;
  box-sizing: border-box;
  }

  body,input,textarea,button{
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    }

    h1,h2,h3,h4,h5,h6,strong{
      font-weight: 600;
    }

    body{
      background: var(--background);
      -webkit-font-smoothing: antialiased;
    }

    button{
      cursor: pointer;
    }
    
    [disabled]{
      opacity: 0.6;
      cursor: not-allowed;
    }
    
`;
