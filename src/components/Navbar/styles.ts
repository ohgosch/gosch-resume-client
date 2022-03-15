import styled, { css } from 'styled-components';
import { rem } from 'polished';
import { mobile, print } from 'visual/medias';

export const Container = styled.nav`
  ${({ theme }) => css`
    background-color: ${theme.colors.secondary};
    display: flex;
    justify-content: center;
    width: 100%;

    ${mobile(css`
      display: none;
    `)}

    ${print(css`
      display: none;
    `)}
  `}
`;

export const MenuItem = styled.a`
  ${({ theme }) => css`
    font-style: normal;
    font-weight: 400;
    font-size: ${rem(16)};
    line-height: ${rem(20)};
    color: ${theme.colors.primary};
    padding: ${rem(12)};
    text-decoration: none;
  `}
`;
