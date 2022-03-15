import { Chip } from 'visual/styles/Chip';

import * as S from './styles';

const Skills = () => {
  const skills = [
    'TypeScript',
    'Accessibility',
    'React',
    'Next.js',
    'Redux',
    'Styled Components',
    'i18n',
    'SASS',
    'Gatsby',
    'Git',
    'VueJS',
    'SEO',
    'Figma',
    'Jest',
    'Svelte',
  ];

  return (
    <S.Container>
      {skills.map((skill) => (
        <Chip as="li" key={skill}>
          {skill}
        </Chip>
      ))}
    </S.Container>
  );
};

export default Skills;
