import { getScopedI18n } from 'locales/server';

import * as S from './styles';

const Navbar = async () => {
  /*
   * Request's
   * */
  const t = await getScopedI18n('common');

  return (
    <S.Container>
      <S.MenuItem href="#experiences">{t('experiences')}</S.MenuItem>
      <S.MenuItem href="#skills">{t('skills')}</S.MenuItem>
      <S.MenuItem href="#education">{t('courses')}</S.MenuItem>
      <S.MenuItem as="p">
        {t('see-updated-content', {
          url: (
            <S.MenuItemLink href={`https://${process.env.NEXT_PUBLIC_URL}`}>
              {process.env.NEXT_PUBLIC_URL}{' '}
            </S.MenuItemLink>
          ),
        })}
      </S.MenuItem>
    </S.Container>
  );
};

export default Navbar;
