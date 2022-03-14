import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body, html {
    min-height: 100vh;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-weight: normal;
  }

  button {
    cursor: pointer;
    border: none;
  }

  img {
    max-width: 100%;
    display: block;
  }
`;
