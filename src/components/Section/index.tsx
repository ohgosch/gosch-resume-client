import { Heading1 } from 'visual/styles/Texts';

import * as S from './styles';

export type SectionProps = {
  name: string;
  id: string;
  children: JSX.Element;
};

const Section = ({ name, children, id }: SectionProps) => {
  return (
    <S.Container id={id}>
      <Heading1>{name}</Heading1>
      <S.Content>{children}</S.Content>
    </S.Container>
  );
};

export default Section;
