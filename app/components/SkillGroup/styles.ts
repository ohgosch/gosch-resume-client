'use client';

import { mobile, notPrint, print, tabletDesktop } from 'lib/visual/medias';
import { rem } from 'polished';
import styled, { css } from 'styled-components';

export const ContainerSkillGroup = styled.section`
  ${({ theme }) => css`
    position: relative;
    border-radius: ${rem(5)};
    border: ${rem(1)} solid ${theme.colors.secondary};
    display: flex;
    align-items: center;
    justify-content: center;

    ${notPrint(css`
      padding: ${rem(32)} ${rem(16)};
    `)}

    ${print(css`
      padding: ${rem(16)} ${rem(8)};
    `)}
  `}
`;

export const Title = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    border-radius: ${rem(5)};
    border: ${rem(1)} solid ${theme.colors.secondary};
    background-color: ${theme.colors.white};
    position: absolute;
    left: ${rem(5)};
    cursor: default;

    ${tabletDesktop(css`
      font-size: ${rem(24)};
      top: ${rem(-23)};
      padding: ${rem(8)};
    `)}

    ${mobile(css`
      font-size: ${rem(18)};
      top: ${rem(-15)};
      padding: ${rem(4)} ${rem(8)};
    `)}

    ${print(css`
      font-size: ${rem(18)};
      top: ${rem(-17)};
      padding: ${rem(4)};
    `)}
  `}
`;

export const Skills = styled.ul`
  display: flex;
  gap: ${rem(8)};
  flex-wrap: wrap;
  justify-content: center;
  list-style-type: none;
`;
