import { css, FlattenSimpleInterpolation } from 'styled-components';
import { rem } from 'polished';

export const mobile = (content: FlattenSimpleInterpolation) => {
  return css`
    @media only screen and (max-width: ${({ theme }) =>
        rem(theme.resolutions.mobile.max)}) {
      ${content}
    }
  `;
};

export const mobileTablet = (content: FlattenSimpleInterpolation) => {
  return css`
    @media only screen and (max-width: ${({ theme }) =>
        rem(theme.resolutions.tablet.max)}) {
      ${content}
    }
  `;
};

export const tablet = (content: FlattenSimpleInterpolation) => {
  return css`
    @media print,
      (min-width: ${({ theme }) =>
        rem(theme.resolutions.tablet.min)}) and (max-width: ${({ theme }) =>
        rem(theme.resolutions.tablet.max)}) {
      ${content}
    }
  `;
};

export const tabletDesktop = (content: FlattenSimpleInterpolation) => {
  return css`
    @media print,
      (min-width: ${({ theme }) => rem(theme.resolutions.tablet.min)}) {
      ${content}
    }
  `;
};

export const desktop = (content: FlattenSimpleInterpolation) => {
  return css`
    @media print,
      (min-width: ${({ theme }) => rem(theme.resolutions.desktop.min)}) {
      ${content}
    }
  `;
};

export const print = (content: FlattenSimpleInterpolation) => {
  return css`
    @media print {
      ${content}
    }
  `;
};

export const notPrint = (content: FlattenSimpleInterpolation) => {
  return css`
    @media not print {
      ${content}
    }
  `;
};
