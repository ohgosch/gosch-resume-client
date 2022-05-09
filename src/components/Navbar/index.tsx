import { Trans, useTranslation } from 'next-i18next';

import * as S from './styles';

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <S.Container>
      <S.MenuItem href="#cover-letter">{t('cover-letter')}</S.MenuItem>
      <S.MenuItem href="#skills">{t('skills')}</S.MenuItem>
      <S.MenuItem href="#experiences">{t('experiences')}</S.MenuItem>
      <S.MenuItem href="#courses">{t('courses')}</S.MenuItem>
      <S.MenuItem as="p">
        <Trans
          i18nKey="see-updated-content"
          components={{
            a: (
              <S.MenuItemLink href={`https://${process.env.NEXT_PUBLIC_URL}`} />
            ),
          }}
          t={() =>
            t('see-updated-content', { url: process.env.NEXT_PUBLIC_URL })
          }
        />
      </S.MenuItem>
    </S.Container>
  );
};

export default Navbar;
