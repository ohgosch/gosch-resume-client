'use client';

import { mobile, print, tabletDesktop } from 'lib/visual/medias';
import { rem } from 'polished';
import styled, { css } from 'styled-components';

export const Heading1 = styled.h2`
  ${({ theme }) => css`
    font-style: normal;
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
    color: ${theme.colors.black};
    cursor: default;

    ${tabletDesktop(css`
      font-size: ${rem(48)};
      line-height: ${rem(59)};
    `)}

    ${mobile(css`
      font-size: ${rem(36)};
      line-height: ${rem(44)};
    `)}
  `}
`;

export const Heading2 = styled.h3`
  ${({ theme }) => css`
    font-style: normal;
    font-weight: 700;
    text-transform: uppercase;
    color: ${theme.colors.primary};
    cursor: default;

    ${tabletDesktop(css`
      font-size: ${rem(36)};
      line-height: ${rem(44)};
    `)}

    ${mobile(css`
      font-size: ${rem(24)};
      line-height: ${rem(30)};
    `)}
  `}
`;

interface ParagraphProps {
  align?: 'left' | 'justify';
}

const modifiers = {
  align: ({ align = 'left' }: Pick<ParagraphProps, 'align'>) => css`
    text-align: ${align};
  `,
};

export const ParagraphStyle = css<ParagraphProps>`
  ${({ theme, align }) => css`
    font-style: normal;
    font-weight: 400;
    color: ${theme.colors.black};

    ${tabletDesktop(css`
      font-size: ${rem(24)};
      line-height: ${rem(30)};
    `)}

    ${mobile(css`
      font-size: ${rem(18)};
      line-height: ${rem(22)};
    `)}
    
    ${modifiers.align({ align })}
  `}
`;

export const Paragraph = styled.p<ParagraphProps>`
  ${ParagraphStyle}

  ${print(css`
    font-size: ${rem(20)};
  `)}
`;
