import { useTranslation } from 'next-i18next';

import CoverLetter from 'components/CoverLetter';
import Experiences from 'components/Experiences';
import Wrapper from 'visual/styles/Wrapper';
import Section from 'components/Section';
import Courses from 'components/Courses';
import { ApiResponse } from 'types/Api';
import Navbar from 'components/Navbar';
import Skills from 'components/Skills';

import * as S from './styles';

type ResumeTemplateProps = {
  data: ApiResponse;
};

const ResumeTemplate = ({ data }: ResumeTemplateProps) => {
  const { t } = useTranslation();

  return (
    <S.Container>
      <Navbar />
      <S.Content>
        <Section name={t('cover-letter')} id="cover-letter">
          <Wrapper middle>
            <CoverLetter data={data?.cover_letter} />
          </Wrapper>
        </Section>
        <Section name={t('skills')} id="skills">
          <Wrapper middle>
            <Skills data={data.skills} />
          </Wrapper>
        </Section>
        <Section name={t('experiences')} id="experiences">
          <Wrapper>
            <Experiences data={data.experiences} />
          </Wrapper>
        </Section>
        <Section name={t('courses')} id="courses">
          <Wrapper middle>
            <Courses data={data.courses} />
          </Wrapper>
        </Section>
      </S.Content>
    </S.Container>
  );
};

export default ResumeTemplate;
