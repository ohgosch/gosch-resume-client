'use client';

import { mobile, print, tabletDesktop } from 'lib/visual/medias';
import { rem, rgba } from 'polished';
import styled, { css } from 'styled-components';

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;

  svg {
    opacity: 0.3;
  }

  ${tabletDesktop(css`
    margin-top: ${rem(100)};
    gap: ${rem(24)};

    svg {
      width: ${rem(64)};
    }
  `)}

  ${mobile(css`
    margin-top: ${rem(50)};
    gap: ${rem(16)};

    svg {
      width: ${rem(36)};
    }
  `)}
`;

export const Text = styled.p`
  ${({ theme }) => css`
    font-style: normal;
    font-weight: 700;
    color: ${rgba(theme.colors.black, 0.5)};
    text-align: center;
    cursor: default;

    ${tabletDesktop(css`
      font-size: ${rem(16)};
      line-height: ${rem(20)};
    `)}

    ${mobile(css`
      font-size: ${rem(14)};
      line-height: ${rem(17)};
    `)}

    ${print(css`
      display: none;
    `)}
  `}
`;
