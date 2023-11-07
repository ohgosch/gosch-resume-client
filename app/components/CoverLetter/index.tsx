import { getResume } from 'lib/logic/services/resume';
import { getCurrentLocale } from 'locales/server';

import * as S from './styles';

const CoverLetter = async () => {
  const locale = getCurrentLocale();
  const {
    object: {
      metadata: { cover_letter: coverLetter },
    },
  } = await getResume(locale);

  return (
    <S.Container
      dangerouslySetInnerHTML={{ __html: coverLetter }}
    ></S.Container>
  );
};

export default CoverLetter;
