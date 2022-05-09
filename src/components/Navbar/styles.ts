import styled, { css } from 'styled-components';
import { rem } from 'polished';

import { mobile, notPrint, print } from 'visual/medias';

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
