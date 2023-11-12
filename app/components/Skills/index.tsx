import { getResume } from 'lib/logic/services/resume';
import { Chip } from 'lib/visual/styles/Chip';
import { getCurrentLocale } from 'locales/server';

import * as S from './styles';

const Skills = async () => {
  const locale = getCurrentLocale();
  const {
    object: {
      metadata: { skills },
    },
  } = await getResume(locale);

  return (
    <S.Container>
      {skills.map(({ title }) => (
        <Chip as="li" key={title}>
          {title}
        </Chip>
      ))}
    </S.Container>
  );
};

export default Skills;
