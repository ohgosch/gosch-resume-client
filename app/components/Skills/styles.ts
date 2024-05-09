'use client';

import { desktop, mobile, tablet } from 'lib/visual/medias';
import { rem } from 'polished';
import styled, { css } from 'styled-components';

import { ContainerSkillGroup } from '../SkillGroup/styles';

export const UngroupedSkills = styled.ul`
  display: flex;
  gap: ${rem(8)};
  flex-wrap: wrap;
  justify-content: center;
  list-style-type: none;
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
  `}
`;
