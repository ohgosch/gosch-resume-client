'use client';

import { mobile, tabletDesktop } from 'lib/visual/medias';
import { rem } from 'polished';
import styled, { css } from 'styled-components';

export const Container = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  ${tabletDesktop(css`
    gap: ${rem(16)};
  `)}

  ${mobile(css`
    gap: ${rem(8)};
  `)}
`;
