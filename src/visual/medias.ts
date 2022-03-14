import { css, FlattenSimpleInterpolation } from 'styled-components';
import { rem } from 'polished';

export const mobile = (content: FlattenSimpleInterpolation) => {
  return css`
    @media (max-width: ${({ theme }) => rem(theme.resolutions.mobile.max)}) {
      ${content}
    }
  `;
};

export const mobileTablet = (content: FlattenSimpleInterpolation) => {
  return css`
    @media (max-width: ${({ theme }) => rem(theme.resolutions.tablet.max)}) {
      ${content}
    }
  `;
};

export const tablet = (content: FlattenSimpleInterpolation) => {
  return css`
    @media (min-width: ${({ theme }) =>
        rem(theme.resolutions.tablet.min)}) and (max-width: ${({ theme }) =>
        rem(theme.resolutions.tablet.max)}) {
      ${content}
    }
  `;
};

export const tabletDesktop = (content: FlattenSimpleInterpolation) => {
  return css`
    @media (min-width: ${({ theme }) => rem(theme.resolutions.tablet.min)}) {
      ${content}
    }
  `;
};

export const desktop = (content: FlattenSimpleInterpolation) => {
  return css`
    @media (min-width: ${({ theme }) => rem(theme.resolutions.desktop.min)}) {
      ${content}
    }
  `;
};
