'use client';

import { mobile, tabletDesktop } from 'lib/visual/medias';
import { rem } from 'polished';
import styled, { css } from 'styled-components';

export const Container = styled.article``;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  ${tabletDesktop(css`
    margin-top: ${rem(100)};
    gap: ${rem(100)};
  `)}

  ${mobile(css`
    margin-top: ${rem(64)};
    gap: ${rem(64)};
  `)}
`;
