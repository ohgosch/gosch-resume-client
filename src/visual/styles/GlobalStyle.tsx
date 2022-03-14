import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  ${({ theme }) => css`
    body,
    html {
      min-height: 100vh;
      background-color: ${theme.colors.white};
      color: ${theme.colors.black};
      font-family: 'Rufina', serif;
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
  `}
`;
