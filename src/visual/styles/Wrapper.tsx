import styled, { css } from 'styled-components';
import { rem } from 'polished';

import { mobile, tablet, desktop } from 'visual/medias';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    margin-left: auto;
    margin-right: auto;

    ${mobile(css`
      width: 90%;
      max-width: ${rem(theme.resolutions.mobile.max)};
    `)}

    ${tablet(css`
      width: 88%;
      max-width: ${rem(theme.resolutions.tablet.max)};
    `)}
  
    ${desktop(css`
      width: 90%;
      max-width: ${rem(theme.resolutions.desktop.min)};
    `)}
  `}
`;

export default Wrapper;
