import { Heading1 } from 'lib/visual/styles/Texts';
import { type PropsWithChildren } from 'react';

import * as S from './styles';

export interface SectionProps extends PropsWithChildren {
  name?: string;
  id: string;
  $isBreakPrintBefore?: boolean;
}

const Section = async ({
  name,
  children,
  id,
  $isBreakPrintBefore,
}: SectionProps) => {
  return (
    <S.Container id={id} $isBreakPrintBefore={$isBreakPrintBefore}>
      {!!name && <Heading1>{name}</Heading1>}
      <S.Content>{children}</S.Content>
    </S.Container>
  );
};

export default Section;
