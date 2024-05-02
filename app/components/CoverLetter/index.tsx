import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import { getCoverLetter } from 'lib/logic/services/resume.service';
import type { TLocale } from 'locales/i18n.config';
import { getCurrentLocale } from 'locales/server';

import * as S from './styles';

const CoverLetter = async () => {
  const locale = getCurrentLocale();
  const {
    data: {
      data: {
        attributes: { coverLetterContent },
      },
    },
  } = await getCoverLetter(locale as TLocale);

  return (
    <S.Container>
      <BlocksRenderer content={coverLetterContent} />
    </S.Container>
  );
};

export default CoverLetter;
