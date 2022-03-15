import styled, { css } from 'styled-components';
import { rem } from 'polished';

import { mobile, tabletDesktop } from 'visual/medias';

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
