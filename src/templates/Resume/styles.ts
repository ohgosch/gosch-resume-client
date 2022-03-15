import styled, { css } from 'styled-components';
import { rem } from 'polished';

import { mobile, tabletDesktop } from 'visual/medias';

export const Container = styled.section``;

export const Content = styled.div`
  ${tabletDesktop(
    css`
      margin-top: ${rem(100)};
    `,
  )}

  ${mobile(
    css`
      margin-top: ${rem(50)};
    `,
  )}
`;
