import { createGlobalStyle, css } from 'styled-components';
import { notPrint, print } from 'visual/medias';
import { rem } from 'polished';

export const GlobalStyle = createGlobalStyle`

  @page {
    size: A4;
    margin: 0;
  }
  
  ${({ theme }) => css`
    body,
    html {
      color: ${theme.colors.black};
      font-family: 'Rufina', serif;

      ${notPrint(
        css`
          background-color: ${theme.colors.white};
          min-height: 100vh;
        `,
      )}

      ${print(css`
        font-size: ${rem(10)};
      `)}
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
