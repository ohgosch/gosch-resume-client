import styled, { css } from 'styled-components';
import { rem } from 'polished';

import { mobile, tabletDesktop } from 'visual/medias';

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

type ParagraphProps = {
  align?: 'left' | 'justify';
};

const modifiers = {
  align: ({ align = 'left' }: Pick<ParagraphProps, 'align'>) =>
    css`
      text-align: ${align};
    `,
};

export const Paragraph = styled.p<ParagraphProps>`
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
