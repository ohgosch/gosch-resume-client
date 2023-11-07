'use client';

import { mobile, tabletDesktop } from 'lib/visual/medias';
import { ParagraphStyle } from 'lib/visual/styles/Texts';
import { rem } from 'polished';
import styled, { css } from 'styled-components';

export const Container = styled.div`
  p {
    ${ParagraphStyle};

    text-align: justify;

    &:not(:last-child) {
      ${tabletDesktop(css`
        margin-bottom: ${rem(24)};
      `)}

      ${mobile(css`
        margin-bottom: ${rem(18)};
      `)}
    }
  }
`;
