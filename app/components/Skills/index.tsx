import { type ISkill } from 'interfaces/resume';
import { getSkillsSection } from 'lib/logic/services/resume.service';
import { Chip } from 'lib/visual/styles/Chip';
import { getCurrentLocale } from 'locales/server';

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

  return (
    <S.Container>
      {skills.map(({ id, attributes }) => (
        <Chip as="li" key={id}>
          {attributes.name}
        </Chip>
      ))}
    </S.Container>
  );
};

export default Skills;
