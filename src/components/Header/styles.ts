import { hideVisually, rem, size } from 'polished';
import styled, { css } from 'styled-components';

import { mobile, print, tabletDesktop } from 'visual/medias';
import { HeaderProps } from 'components/Header/index';
import Wrapper from 'visual/styles/Wrapper';

const menuSizeTabletDesktop = 64;

type ContainerProps = Pick<HeaderProps, 'forceBorder'>;

export const Container = styled.header<ContainerProps>`
  ${({ theme, forceBorder }) => css`
    background-color: ${theme.colors.primary};

    ${mobile(css`
      border-bottom: ${rem(5)} solid ${theme.colors.secondary};
    `)}

    ${print(css`
      border-bottom: ${rem(5)} solid ${theme.colors.secondary};
    `)}

    ${forceBorder &&
    css`
      border-bottom: ${rem(5)} solid ${theme.colors.secondary};
    `}
  `}
`;

export const Title = styled.h1`
  ${hideVisually()};
`;

export const Content = styled(Wrapper)`
  position: relative;
  display: grid;
  align-items: center;
  justify-content: space-between;

  ${tabletDesktop(css`
    grid-template-areas: 'logo menu' 'infos menu';
  `)}

  ${mobile(css`
    min-height: ${rem(300)};
    grid-template-areas: 'logo logo' 'menu infos';
    align-items: end;
  `)}
  
  ${print(css`
    grid-template-areas: 'logo menu';
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

export const LogoWrapper = styled.div`
  grid-area: logo;

  ${tabletDesktop(
    css`
      display: flex;
      align-items: end;
      height: 100%;
    `,
    true,
  )}

  ${mobile(css`
    width: 100%;
    display: block;
    text-align: center;
    justify-content: center;
    margin-bottom: ${rem(-72)};
  `)}
  
  ${print(css`
    height: 100%;
    display: flex;
    align-items: center;
  `)}
`;

export const Infos = styled.div`
  grid-area: infos;
  display: flex;
  gap: ${rem(16)};
  align-items: end;

  ${mobile(css`
    height: ${rem(36)};
    margin-bottom: ${rem(24)};
    justify-content: end;
    align-items: center;
  `)}

  ${print(css`
    display: none;
  `)}

    svg {
    ${size(rem(12))}
  }
`;

type InfoProps = {
  hideInMobile?: boolean;
};

export const Info = styled.button<InfoProps>`
  ${({ theme, hideInMobile }) => css`
    background-color: transparent;
    color: ${theme.colors.white};
    display: flex;
    gap: ${rem(4)};
    width: fit-content;
    font-style: normal;
    font-weight: 700;
    font-size: ${rem(12)};
    line-height: ${rem(15)};
    text-transform: lowercase;
    align-items: center;
    padding: ${rem(4)};

    ${mobile(css`
      ${hideInMobile &&
      css`
        display: none;
      `}
    `)}
  `}
`;

export const Menu = styled.ul`
  ${({ theme }) => css`
    list-style-type: none;
    display: flex;
    grid-area: menu;

    ${tabletDesktop(css`
      width: ${rem(menuSizeTabletDesktop)};
      flex-direction: column;
      background-color: ${theme.colors.secondary};
      justify-content: center;
      padding: ${rem(22)} 0;
    `)}

    ${mobile(css`
      gap: ${rem(10)};
      position: absolute;
      bottom: ${rem(24)};
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
        position: relative;
        z-index: 10;
        pointer-events: none;
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
      transition: 0.2s ease;
      right: 0;
      padding-right: ${rem(menuSizeTabletDesktop + 24)};
      padding-left: ${rem(24)};
      border-bottom-left-radius: ${rem(5)};
      border-top-left-radius: ${rem(5)};
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

export const MenuItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  ${({ theme }) => css`
    ${tabletDesktop(css`
      ${size(rem(menuSizeTabletDesktop))}

      :hover ${MenuItemText} {
        background-color: ${theme.colors.secondary};
        color: ${theme.colors.primary};
      }
    `)}

    ${mobile(css`
      ${size(rem(36))};
      border: ${rem(2)} solid ${theme.colors.secondary};
      border-radius: ${rem(5)};
    `)}
  `}
`;

export const Player = styled.audio(hideVisually);
