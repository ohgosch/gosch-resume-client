import { rem } from 'polished';
import { css, type CSSProp } from 'styled-components';

export const mobile = (content: CSSProp) => {
  return css`
    @media only screen and (max-width: ${({ theme }) =>
        rem(theme.resolutions.mobile.max)}) {
      ${content}
    }
  `;
};

export const mobileTablet = (content: CSSProp) => {
  return css`
    @media only screen and (max-width: ${({ theme }) =>
        rem(theme.resolutions.tablet.max)}) {
      ${content}
    }
  `;
};

export const tablet = (content: CSSProp) => {
  return css`
    @media print,
      (min-width: ${({ theme }) =>
        rem(theme.resolutions.tablet.min)}) and (max-width: ${({ theme }) =>
        rem(theme.resolutions.tablet.max)}) {
      ${content}
    }
  `;
};

export const tabletDesktop = (content: CSSProp, excludePrint = false) => {
  return css`
    @media ${excludePrint
        ? 'screen, (not print) and'
        : 'print,'} (min-width: ${({ theme }) =>
        rem(theme.resolutions.tablet.min)}) {
      ${content}
    }
  `;
};

export const desktop = (content: CSSProp) => {
  return css`
    @media print,
      (min-width: ${({ theme }) => rem(theme.resolutions.desktop.min)}) {
      ${content}
    }
  `;
};

export const print = (content: CSSProp) => {
  return css`
    @media print {
      ${content}
    }
  `;
};

export const notPrint = (content: CSSProp) => {
  return css`
    @media not print {
      ${content}
    }
  `;
};
