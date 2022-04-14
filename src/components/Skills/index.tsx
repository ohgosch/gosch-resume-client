import { Chip } from 'visual/styles/Chip';
import { SkillResponse } from 'types/Api';

import * as S from './styles';

type SkillsData = {
  data: SkillResponse[];
};

const Skills = ({ data }: SkillsData) => {
  return (
    <S.Container>
      {data.map(({ id, title }) => (
        <Chip as="li" key={id}>
          {title}
        </Chip>
      ))}
    </S.Container>
  );
};

export default Skills;
