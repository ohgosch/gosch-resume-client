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
        {skills.map(({ documentId, name }) => (
          <Chip as="li" key={documentId}>
            {name}
          </Chip>
        ))}
      </S.Skills>
    </S.ContainerSkillGroup>
  );
};

export default SkillGroup;
