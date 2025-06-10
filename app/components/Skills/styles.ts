'use client';

import {
  desktop,
  mobile,
  notPrint,
  print,
  tablet,
  tabletDesktop,
} from 'lib/visual/medias';
import { rem } from 'polished';
import styled, { css } from 'styled-components';

import { ContainerSkillGroup } from '../SkillGroup/styles';

export const Skill = styled.li`
  ${({ theme }) => css`
    font-style: normal;
    font-weight: 400;
    color: ${theme.colors.primary};
    border-radius: ${rem(5)};
    cursor: default;
    background-color: ${theme.colors.secondary};

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

    ${print(css`
      font-size: ${rem(14)};
      line-height: ${rem(17)};
      padding: ${rem(4)} ${rem(8)};
    `)}
  `}
`;

export const UngroupedSkills = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  list-style-type: none;

  ${notPrint(css`
    gap: ${rem(8)};
  `)}

  ${print(css`
    gap: ${rem(4)};
  `)}
`;

export const Container = styled.div`
  ${({ theme }) => css`
    display: grid;

    ${desktop(css`
      gap: ${rem(16)};
      grid-template-columns: 1fr 1fr;
      justify-content: center;

      ${ContainerSkillGroup} {
        grid-row-start: 1;
      }

      ${UngroupedSkills} {
        grid-column-start: 1;
        grid-column-end: 3;
        max-width: ${rem(theme.resolutions.desktop.middle)};
        margin: 0 auto;
      }
    `)}

    ${tablet(css`
      gap: ${rem(36)};
    `)}
    
    ${mobile(css`
      gap: ${rem(24)};
    `)}

    ${print(css`
      gap: ${rem(16)};
    `)}
  `}
`;
