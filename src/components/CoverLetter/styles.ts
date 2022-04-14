import styled, { css } from 'styled-components';
import { rem } from 'polished';

import { mobile, tabletDesktop } from 'visual/medias';
import { ParagraphStyle } from 'visual/styles/Texts';

export const Container = styled.div`
  p {
    ${ParagraphStyle};

    text-align: justify;

    :not(:last-child) {
      ${tabletDesktop(css`
        margin-bottom: ${rem(24)};
      `)}

      ${mobile(css`
        margin-bottom: ${rem(18)};
      `)}
    }
  }
`;
