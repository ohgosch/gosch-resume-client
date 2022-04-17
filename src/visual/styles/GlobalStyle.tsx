import { createGlobalStyle, css } from 'styled-components';
import { rem } from 'polished';

import { mobile, notPrint, print, tabletDesktop } from 'visual/medias';

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
        font-size: ${rem(12)};
      `)}
    }

    body {
      ${tabletDesktop(
        css`
          padding-bottom: ${rem(100)};
        `,
      )}

      ${mobile(
        css`
          padding-bottom: ${rem(50)};
        `,
      )}
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
      font-family: 'Rufina', serif;
    }

    img {
      max-width: 100%;
      display: block;
    }
  `}
`;
