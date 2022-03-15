import { hideVisually, rem, size } from 'polished';
import styled, { css } from 'styled-components';

import { mobile, print, tabletDesktop } from 'visual/medias';
import Wrapper from 'visual/styles/Wrapper';

const menuSizeTabletDesktop = 64;

export const Container = styled.header`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};

    ${mobile(css`
      border-bottom: ${rem(5)} solid ${theme.colors.secondary};
    `)}

    ${print(css`
      border-bottom: ${rem(5)} solid ${theme.colors.secondary};
    `)}
  `}
`;

export const Title = styled.h1`
  ${hideVisually()}
`;

export const Content = styled(Wrapper)`
  position: relative;
  display: flex;

  ${tabletDesktop(css`
    justify-content: space-between;
  `)}

  ${mobile(css`
    flex-direction: column;
    justify-content: center;
    min-height: ${rem(300)};
  `)}

  #logo {
    ${mobile(css`
      max-width: ${rem(300)};
    `)}

    ${tabletDesktop(css`
      width: ${rem(330)};
    `)}
  }
`;

export const Menu = styled.ul`
  ${({ theme }) => css`
    list-style-type: none;
    display: flex;

    ${tabletDesktop(css`
      width: ${rem(menuSizeTabletDesktop)};
      flex-direction: column;
      background-color: ${theme.colors.secondary};
      justify-content: center;
      padding: ${rem(54)} 0;
    `)}

    ${mobile(css`
      gap: ${rem(10)};
      position: absolute;
      bottom: ${rem(24)};
    `)}
  `}
`;

export const MenuItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  ${({ theme }) => css`
    ${tabletDesktop(css`
      ${size(rem(menuSizeTabletDesktop))}
    `)}

    ${mobile(css`
      ${size(rem(36))};
      border: ${rem(2)} solid ${theme.colors.secondary};
      border-radius: ${rem(5)};
    `)}
  `}
`;

export const MenuItemIconWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;

    .icon {
      ${tabletDesktop(css`
        ${size(rem(28))}
      `)}

      ${mobile(css`
        ${size(rem(16))}

        path {
          fill: ${theme.colors.secondary};
        }
      `)}
    }
  `}
`;

export const MenuItemText = styled.a`
  ${({ theme }) => css`
    ${tabletDesktop(css`
      font-weight: 400;
      font-size: ${rem(24)};
      line-height: ${rem(menuSizeTabletDesktop)};
      color: ${theme.colors.secondary};
      text-decoration: none;
      position: absolute;
      right: 0;
      padding-right: ${rem(menuSizeTabletDesktop + 24)};
      height: ${rem(menuSizeTabletDesktop)};
      white-space: nowrap;
    `)}

    ${mobile(css`
      font-size: 0;
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
    `)}
  `}
`;
