'use client';

import { mobile, print, tabletDesktop } from 'lib/visual/medias';
import { rem } from 'polished';
import styled, { css } from 'styled-components';

import { type SectionProps } from './index';

export const Container = styled.section<
  Pick<SectionProps, '$isBreakPrintBefore'>
>`
  ${({ $isBreakPrintBefore }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;

    ${$isBreakPrintBefore &&
    css`
      page-break-before: always;
    `}

    ${mobile(css`
      gap: ${rem(36)};
    `)}
  
    ${tabletDesktop(css`
      gap: ${rem(50)};
    `)}
    
    ${print(css`
      gap: ${rem(24)};
    `)}
  `}
`;

export const Content = styled.div`
  width: 100%;
`;
