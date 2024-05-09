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
  const locale = getCurrentLocale();

  /*
   * Request's
   * */
  const { data } = await getSkillsSection(locale);

  /*
   * Data's
   * */
  const skills: ISkill[] = data?.data?.attributes.skills.data;

  const groups: ISkillCategoryGroup[] =
    data?.data?.attributes.skill_categories.data.map((category) => ({
      ...category,
      skills: skills.filter(
        (skill) => skill.attributes.skill_category.data?.id === category.id,
      ),
    }));

  const ungroupedSkills = skills.filter(
    (skill) => !skill.attributes.skill_category.data?.id,
  );

  return (
    <S.Container>
      {groups.map((group) => (
        <SkillGroup
          skills={group.skills}
          title={group.attributes.name}
          key={group.id}
        />
      ))}
      <S.UngroupedSkills>
        {ungroupedSkills.map(({ id, attributes }) => (
          <Chip as="li" key={id}>
            {attributes.name}
          </Chip>
        ))}
      </S.UngroupedSkills>
    </S.Container>
  );
};

export default Skills;
