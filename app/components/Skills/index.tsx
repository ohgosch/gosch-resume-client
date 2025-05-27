import { type ISkill, type ISkillCategoryGroup } from 'interfaces/resume';
import { getSkillsSection } from 'lib/logic/services/resume.service';
import { Chip } from 'lib/visual/styles/Chip';
import { getCurrentLocale } from 'locales/server';

import SkillGroup from '../SkillGroup';
import * as S from './styles';

const Skills = async () => {
  /*
   * Store's
   * */
  const locale = await getCurrentLocale();

  /*
   * Request's
   * */
  const { data } = await getSkillsSection(locale);

  /*
   * Data's
   * */
  const skills: ISkill[] = data?.data?.skills;

  const groups: ISkillCategoryGroup[] = data?.data?.skill_categories.map(
    (category) => ({
      ...category,
      skills: skills.filter(
        (skill) => skill.skill_category?.documentId === category.documentId,
      ),
    }),
  );

  const ungroupedSkills = skills.filter(
    (skill) => !skill.skill_category?.documentId,
  );

  return (
    <S.Container>
      {groups.map((group) => (
        <SkillGroup
          skills={group.skills}
          title={group.name}
          key={group.documentId}
        />
      ))}
      <S.UngroupedSkills>
        {ungroupedSkills.map(({ name, documentId }) => (
          <Chip as="li" key={documentId}>
            {name}
          </Chip>
        ))}
      </S.UngroupedSkills>
    </S.Container>
  );
};

export default Skills;
