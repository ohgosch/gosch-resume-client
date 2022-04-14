import { useTranslation } from 'next-i18next';

import CoverLetter from 'components/CoverLetter';
import Wrapper from 'visual/styles/Wrapper';
import Section from 'components/Section';
import { ApiResponse } from 'types/Api';

import * as S from './styles';

type CoverLetterTemplateProps = {
  data: ApiResponse;
};

const CoverLetterTemplate = ({ data }: CoverLetterTemplateProps) => {
  const { t } = useTranslation();

  return (
    <S.Container>
      <S.Content>
        <Section name={t('cover-letter')} id="cover-letter">
          <Wrapper middle>
            <CoverLetter data={data.cover_letter} />
          </Wrapper>
        </Section>
      </S.Content>
    </S.Container>
  );
};

export default CoverLetterTemplate;
