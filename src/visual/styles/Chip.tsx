import styled, { css } from 'styled-components';
import { rem } from 'polished';

import { mobile, notPrint, print, tabletDesktop } from 'visual/medias';

export const Chip = styled.span`
  ${({ theme }) => css`
    font-style: normal;
    font-weight: 400;
    color: ${theme.colors.primary};
    border-radius: ${rem(5)};
    cursor: default;

    ${notPrint(css`
      background-color: ${theme.colors.secondary};
    `)}

    ${print(css`
      border: ${rem(1)} solid ${theme.colors.primary};
    `)}

    ${tabletDesktop(css`
      font-size: ${rem(24)};
      line-height: ${rem(30)};
      padding: ${rem(8)} ${rem(16)};
    `)}

    ${mobile(css`
      font-size: ${rem(18)};
      line-height: ${rem(22)};
      padding: ${rem(4)} ${rem(8)};
    `)}
  `}
`;
