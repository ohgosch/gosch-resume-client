import styled, { css } from 'styled-components';
import {
  desktop,
  mobile,
  mobileTablet,
  tablet,
  tabletDesktop,
} from 'visual/medias';
import { rem, size } from 'polished';
import { Paragraph } from 'visual/styles/Texts';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${tabletDesktop(css`
    gap: ${rem(64)};
  `)}

  ${mobile(css`
    gap: ${rem(36)};
  `)}
`;

export const Experience = styled.article`
  ${({ theme }) => css`
    display: grid;
    position: relative;

    :not(:last-child):after {
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
      max-width: ${rem(190)};
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

export const LogoWrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    z-index: 10;

    > svg,
    > img {
      max-width: 55%;
    }

    ${tabletDesktop(css`
      ${size(rem(75))};
    `)}

    ${mobile(css`
      ${size(rem(64))};
    `)}
  `}
`;

export const Description = styled(Paragraph)`
  ${mobileTablet(css`
    order: 3;
    grid-column: 2;
  `)}
`;
