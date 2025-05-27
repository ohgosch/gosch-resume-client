import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import { getCoverLetter } from 'lib/logic/services/resume.service';
import type { TLocale } from 'locales/i18n.config';
import { getCurrentLocale } from 'locales/server';

import * as S from './styles';

const CoverLetter = async () => {
  /*
   * Store's
   * */
  const locale = await getCurrentLocale();

  /*
   * Request's
   * */
  const {
    data: {
      data: { coverLetterContent },
    },
  } = await getCoverLetter(locale as TLocale);

  return (
    <S.Container>
      <BlocksRenderer content={coverLetterContent} />
    </S.Container>
  );
};

export default CoverLetter;
