import styled, { css } from 'styled-components';
import { rem, size } from 'polished';

import { mobile, notPrint, print, tabletDesktop } from 'visual/medias';

export const Container = styled.div`
  display: grid;

  ${tabletDesktop(css`
    grid-gap: ${rem(36)};
  `)}

  ${mobile(css`
    grid-gap: ${rem(16)};
  `)}
`;

export const Course = styled.div`
  ${({ theme }) => css`
    display: flex;
    position: relative;

    :not(:last-child):after {
      content: '';
      display: block;
      background-color: ${theme.colors.primary};
      position: absolute;
      top: 50%;
      left: 0;

      ${tabletDesktop(css`
        width: ${rem(5)};
        border-radius: ${rem(5)};
        height: calc(50% + ${rem(36)});
      `)}

      ${mobile(css`
        width: ${rem(3)};
        border-radius: ${rem(3)};
        height: calc(50% + ${rem(16)});
      `)}
    }

    :not(:first-child):before {
      content: '';
      display: block;
      background-color: ${theme.colors.primary};
      position: absolute;
      top: ${rem(-10)};
      left: 0;
      z-index: 1;

      ${tabletDesktop(css`
        width: ${rem(5)};
        height: calc(50% + ${rem(14)});
        border-radius: ${rem(5)};
      `)}

      ${mobile(css`
        width: ${rem(3)};
        height: calc(50% + ${rem(13)});
        border-radius: ${rem(3)};
      `)}
    }

    ${tabletDesktop(css`
      padding-left: ${rem(48)};
    `)}

    ${mobile(css`
      padding-left: ${rem(36)};
    `)}
  `}
`;

export const CourseContent = styled.div`
  ${({ theme }) => css`
    display: grid;
    flex-shrink: 0;
    width: auto;
    border-radius: ${rem(5)};
    position: relative;

    ${notPrint(css`
      background-color: ${theme.colors.secondary};
    `)}

    ${print(css`
      border: ${rem(3)} solid ${theme.colors.primary};
    `)}

    :after {
      content: '';
      display: block;
      background-color: ${theme.colors.primary};
      border-radius: 100%;
      border-style: solid;
      position: absolute;

      ${notPrint(css`
        border-color: ${theme.colors.white};
      `)}

      ${print(css`
        border-color: #fff;
      `)}

      ${tabletDesktop(css`
        ${size(rem(32))};
        border-width: ${rem(4)};
        top: calc(50% - ${rem(32 / 2)});
        left: ${rem((32 / 2 + 4) * -1)};
      `)}

      ${mobile(css`
        ${size(rem(16))};
        border-width: ${rem(2)};
        top: calc(50% - ${rem(16 / 2)});
        left: ${rem((16 / 2 + 2) * -1)};
      `)}
    }

    :before {
      content: '';
      display: block;
      position: absolute;
      top: 50%;
      background-color: ${theme.colors.primary};
      z-index: 10;

      ${tabletDesktop(css`
        height: ${rem(5)};
        width: ${rem(48)};
        left: ${rem(-48)};
        border-radius: ${rem(5)};
      `)}

      ${mobile(css`
        height: ${rem(3)};
        width: ${rem(36)};
        left: ${rem(-36)};
        border-radius: ${rem(3)};
      `)}
    }

    ${tabletDesktop(css`
      padding: ${rem(32)} ${rem(44)};
    `)}

    ${mobile(css`
      padding: ${rem(16)} ${rem(24)};
    `)}
  `}
`;

export const Title = styled.h3`
  ${({ theme }) => css`
    font-style: normal;
    font-weight: 700;
    color: ${theme.colors.primary};
    white-space: nowrap;
    cursor: default;

    ${tabletDesktop(css`
      font-size: ${rem(28)};
      line-height: ${rem(35)};
    `)}

    ${mobile(css`
      font-size: ${rem(18)};
      line-height: ${rem(22)};
    `)}
  `}
`;

export const Subtitle = styled.span`
  ${({ theme }) => css`
    font-style: normal;
    font-weight: 700;
    color: ${theme.colors.primary};
    cursor: default;

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

export const Date = styled.span`
  ${({ theme }) => css`
    font-style: normal;
    font-weight: 700;
    color: ${theme.colors.black};

    ${tabletDesktop(css`
      font-size: ${rem(18)};
      line-height: ${rem(22)};
    `)}

    ${mobile(css`
      font-size: ${rem(16)};
      line-height: ${rem(20)};
    `)}
  `}
`;
