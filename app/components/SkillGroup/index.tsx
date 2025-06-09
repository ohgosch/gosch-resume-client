import { Skill } from 'components/Skills/styles';
import { type ISkill } from 'interfaces/resume';

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
          <Skill key={documentId}>{name}</Skill>
        ))}
      </S.Skills>
    </S.ContainerSkillGroup>
  );
};

export default SkillGroup;
