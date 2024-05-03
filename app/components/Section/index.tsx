import { Heading1 } from 'lib/visual/styles/Texts';
import { type PropsWithChildren } from 'react';

import * as S from './styles';

export interface SectionProps extends PropsWithChildren {
  name: string;
  id: string;
}

const Section = async ({ name, children, id }: SectionProps) => {
  return (
    <S.Container id={id}>
      <Heading1>{name}</Heading1>
      <S.Content>{children}</S.Content>
    </S.Container>
  );
};

export default Section;
