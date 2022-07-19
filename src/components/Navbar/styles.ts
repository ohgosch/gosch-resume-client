import styled, { css } from 'styled-components';
import { rem } from 'polished';

import { mobile, notPrint, print, tabletDesktop } from 'visual/medias';

export const Container = styled.nav`
  ${({ theme }) => css`
    background-color: ${theme.colors.secondary};
    display: flex;
    justify-content: center;
    width: 100%;

    ${mobile(css`
      display: none;
    `)}
  `}
`;

type MenuItemProps = {
  as?: string;
};

export const MenuItem = styled.a<MenuItemProps>`
  ${({ theme, as }) => css`
    font-style: normal;
    font-weight: 400;
    font-size: ${rem(16)};
    line-height: ${rem(20)};
    color: ${theme.colors.primary};
    padding: ${rem(12)};
    text-decoration: none;

    ${tabletDesktop(
      notPrint(css`
        position: relative;
        display: flex;
        justify-content: center;

        :after {
          content: '';
          width: 0;
          height: ${rem(1)};
          display: block;
          background-color: ${theme.colors.primary};
          border-radius: ${rem(1)};
          position: absolute;
          transition: 0.2s ease;
          bottom: ${rem(10)};
        }

        :hover:after {
          width: calc(100% - ${rem(12 * 2)});
        }
      `),
    )}

    ${as === 'p' &&
    notPrint(
      css`
        display: none;
      `,
    )}

    ${as !== 'p' &&
    print(
      css`
        display: none;
      `,
    )}
  `}
`;

export const MenuItemLink = styled.a`
  color: inherit;
  text-decoration: underline;
`;
