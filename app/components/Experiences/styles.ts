'use client';

import {
  desktop,
  mobile,
  mobileTablet,
  notPrint,
  print,
  tablet,
  tabletDesktop,
} from 'lib/visual/medias';
import { Paragraph, ParagraphStyle } from 'lib/visual/styles/Texts';
import { rem, size } from 'polished';
import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  ${mobile(css`
    gap: ${rem(36)};
  `)}

  ${mobileTablet(css`
    align-items: flex-start;
  `)}

  ${tabletDesktop(css`
    gap: ${rem(64)};
  `)}

  ${desktop(css`
    align-items: center;
  `)}
`;

export const Experience = styled.article`
  ${({ theme }) => css`
    display: grid;
    position: relative;

    &:not(:last-child):after {
      content: '';
      width: ${rem(5)};
      height: calc(100% + ${rem(64)});
      position: absolute;
      display: block;
      background-color: ${theme.colors.primary};

      ${desktop(css`
        left: calc(50% - ${rem(2)});
      `)}

      ${tablet(css`
        left: ${rem(75 / 2 - 2)};
      `)}
      
      ${mobile(css`
        left: ${rem(64 / 2 - 2)};
      `)}
      
      ${print(css`
        left: calc(50% - ${rem(2)});
      `)}
    }

    ${desktop(css`
      grid-template-columns: 1fr ${rem(75)} 1fr;
      grid-gap: 0 ${rem(50)};
    `)}

    ${mobileTablet(css`
      grid-template-columns: ${rem(75)} auto;
    `)}
    
    ${tablet(css`
      grid-gap: ${rem(10)} ${rem(36)};
    `)}
    
    ${mobile(css`
      grid-gap: ${rem(10)} ${rem(24)};
    `)}
  `}
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;

  ${desktop(css`
    text-align: right;
    align-items: flex-end;
  `)}

  ${tabletDesktop(css`
    gap: ${rem(8)};
  `)}

  ${mobile(css`
    gap: ${rem(4)};
  `)}

  ${mobileTablet(css`
    order: 2;
  `)}
`;

export const HeaderContent = styled.div``;

export const Date = styled.span`
  ${({ theme }) => css`
    font-style: normal;
    font-weight: 700;
    color: ${theme.colors.primary};
    white-space: nowrap;
    text-transform: lowercase;

    ${tabletDesktop(css`
      font-size: ${rem(24)};
      line-height: ${rem(30)};
    `)}

    ${mobile(css`
      font-size: ${rem(16)};
      line-height: ${rem(20)};
    `)}
  `}
`;

export const Role = styled.span`
  ${({ theme }) => css`
    font-style: normal;
    font-weight: 700;
    color: ${theme.colors.black};

    ${desktop(css`
      max-width: ${rem(200)};
    `)}

    ${tabletDesktop(css`
      font-size: ${rem(16)};
      line-height: ${rem(20)};
    `)}

    ${mobile(css`
      font-size: ${rem(14)};
      line-height: ${rem(17)};
    `)}
    
    ${mobileTablet(css`
      order: 1;
    `)}
  `}
`;

interface LogoWrapperProps {
  $small: boolean;
}

export const LogoWrapper = styled.div<LogoWrapperProps>`
  ${({ theme, $small }) => css`
    background-color: ${theme.colors.primary};
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 10;

    svg,
    img {
      width: 55%;
      height: auto;
      border-radius: 100%;
      filter: grayscale(100);
    }

    ${tabletDesktop(css`
      ${$small ? size(rem(75 / 2)) : size(rem(75))}
      ${$small &&
      css`
        margin-left: ${rem(75 / 2 / 2)};
      `}
    `)}

    ${mobile(css`
      ${$small ? size(rem(64 / 2)) : size(rem(64))};
      ${$small &&
      css`
        margin-left: ${rem(64 / 2 / 2)};
      `}
    `)}
  `}
`;

export const DescriptionWrap = styled.div`
  ${mobileTablet(css`
    order: 3;
    grid-column: 2;
  `)}
`;

export const Description = styled(Paragraph)``;

export const DescriptionRich = styled.div`
  p,
  li {
    ${ParagraphStyle};
  }

  li:not(:last-of-type) {
    ${print(css`
      margin-bottom: ${rem(4)};
    `)}

    ${notPrint(css`
      margin-bottom: ${rem(8)};
    `)}
  }

  strong {
    font-weight: 900;
  }
`;
