import styled, { css } from 'styled-components';
import { rem } from 'polished';

import { mobile, print, tabletDesktop } from 'visual/medias';

export const Container = styled.div``;

export const Content = styled.main`
  display: flex;
  flex-direction: column;

  ${tabletDesktop(
    css`
      margin-top: ${rem(100)};
      gap: ${rem(100)};
    `,
  )}

  ${mobile(
    css`
      margin-top: ${rem(64)};
      gap: ${rem(64)};
    `,
  )}

  ${print(
    css`
      margin-top: ${rem(80)};
      gap: ${rem(80)};
    `,
  )}
`;
