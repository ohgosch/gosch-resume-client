import { mobile, notPrint, print, tabletDesktop } from 'lib/visual/medias';
import { rem } from 'polished';
import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  @page {
    size: A4;
    margin: 0;
  }
  
  ${({ theme }) => css`
    body,
    html {
      color: ${theme.colors.black};
      background-color: ${theme.colors.white};

      ${notPrint(css`
        min-height: 100vh;
        font-family: 'Rufina', serif;
      `)}

      ${print(css`
        font-size: ${rem(12)};
        font-family: serif;
      `)}
    }

    body {
      ${tabletDesktop(css`
        padding-bottom: ${rem(100)};
      `)}

      ${mobile(css`
        padding-bottom: ${rem(50)};
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

      ${notPrint(css`
        font-family: 'Rufina', serif;
      `)}

      ${print(css`
        font-family: serif;
      `)}
    }

    img {
      max-width: 100%;
      display: block;
    }
  `}
`;
