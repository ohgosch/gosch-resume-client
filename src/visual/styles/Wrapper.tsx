import styled, { css } from 'styled-components';
import { rem } from 'polished';

import { mobile, tablet, desktop } from 'visual/medias';

export type WrapperProps = {
  middle?: boolean;
};

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, middle }) => css`
    margin-left: auto;
    margin-right: auto;

    ${mobile(css`
      width: 90%;
      max-width: ${rem(theme.resolutions.mobile.max)};
    `)}

    ${tablet(css`
      width: 88%;
      max-width: ${rem(
        middle ? theme.resolutions.tablet.middle : theme.resolutions.tablet.max,
      )};
    `)}
  
    ${desktop(css`
      width: 90%;
      max-width: ${rem(
        middle
          ? theme.resolutions.desktop.middle
          : theme.resolutions.desktop.min,
      )};
    `)}
  `}
`;

export default Wrapper;
