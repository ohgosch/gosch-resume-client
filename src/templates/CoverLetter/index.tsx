import { useTranslation } from 'next-i18next';

import CoverLetter from 'components/CoverLetter';
import Wrapper from 'visual/styles/Wrapper';
import Section from 'components/Section';

import * as S from './styles';

const CoverLetterTemplate = () => {
  const { t } = useTranslation();

  return (
    <S.Container>
      <S.Content>
        <Section name={t('cover-letter')} id="cover-letter">
          <Wrapper middle>
            <CoverLetter />
          </Wrapper>
        </Section>
      </S.Content>
    </S.Container>
  );
};

export default CoverLetterTemplate;
