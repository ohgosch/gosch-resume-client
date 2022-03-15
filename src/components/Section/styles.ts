import styled, { css } from 'styled-components';
import { rem } from 'polished';
import { mobile, tabletDesktop } from 'visual/medias';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${tabletDesktop(css`
    gap: ${rem(50)};
  `)}

  ${mobile(css`
    gap: ${rem(36)};
  `)}
`;

export const Content = styled.div``;
