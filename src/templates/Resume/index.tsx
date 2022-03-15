import { useTranslation } from 'next-i18next';

import CoverLetter from 'components/CoverLetter';
import Wrapper from 'visual/styles/Wrapper';
import Section from 'components/Section';
import Navbar from 'components/Navbar';
import Skills from 'components/Skills';

import * as S from './styles';

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
      </S.Content>
    </S.Container>
  );
};

export default ResumeTemplate;
