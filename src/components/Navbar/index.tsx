import { useTranslation } from 'next-i18next';

import * as S from './styles';

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <S.Container>
      <S.MenuItem href="#cover-letter">{t('cover-letter')}</S.MenuItem>
      <S.MenuItem href="#skills">{t('skills')}</S.MenuItem>
      <S.MenuItem href="#experiences">{t('experiences')}</S.MenuItem>
      <S.MenuItem href="#courses">{t('courses')}</S.MenuItem>
    </S.Container>
  );
};

export default Navbar;
