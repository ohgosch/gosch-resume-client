import { type ISkill } from 'interfaces/resume';
import { Chip } from 'lib/visual/styles/Chip';

import * as S from './styles';

interface ISkillGroupProps {
  title?: string;
  skills: ISkill[];
}

const SkillGroup = ({ title, skills }: ISkillGroupProps) => {
  return (
    <S.ContainerSkillGroup>
      <S.Title>{title}</S.Title>
      <S.Skills>
        {skills.map(({ id, attributes }) => (
          <Chip as="li" key={id}>
            {attributes.name}
          </Chip>
        ))}
      </S.Skills>
    </S.ContainerSkillGroup>
  );
};

export default SkillGroup;
