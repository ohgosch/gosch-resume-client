import { useTranslation } from 'next-i18next';

import CoverLetter from 'components/CoverLetter';
import Experiences from 'components/Experiences';
import Wrapper from 'visual/styles/Wrapper';
import Section from 'components/Section';
import Navbar from 'components/Navbar';
import Skills from 'components/Skills';

import * as S from './styles';
import Courses from 'components/Courses';

const ResumeTemplate = () => {
  const { t } = useTranslation();

  return (
    <S.Container>
      <Navbar />
      <S.Content>
        <Section name={t('cover-letter')} id="cover-letter">
          <Wrapper middle>
            <CoverLetter />
          </Wrapper>
        </Section>
        <Section name={t('skills')} id="skills">
          <Wrapper middle>
            <Skills />
          </Wrapper>
        </Section>
        <Section name={t('experiences')} id="experiences">
          <Wrapper>
            <Experiences />
          </Wrapper>
        </Section>
        <Section name={t('courses')} id="courses">
          <Wrapper middle>
            <Courses />
          </Wrapper>
        </Section>
      </S.Content>
    </S.Container>
  );
};

export default ResumeTemplate;
