import { useTranslation, withTranslation } from 'next-i18next';

import WhatsAppIcon from 'public/assets/img/icon/whatsapp.svg';
import LinkedInIcon from 'public/assets/img/icon/linkedin.svg';
import GitHubIcon from 'public/assets/img/icon/github.svg';
import Logo from 'public/assets/img/logo.svg';

import * as S from './styles';

const Header = () => {
  const { t } = useTranslation(['header', 'common']);

  return (
    <S.Container>
      <S.Title>{t('name', { ns: 'common' })}</S.Title>
      <S.Content>
        <Logo id="logo" aria-label={t('logo-alt')} />
        <S.Menu aria-label={t('social-media')}>
          <S.MenuItem aria-label="Linked-in">
            <S.MenuItemIconWrapper>
              <LinkedInIcon className="icon" aria-hidden />
              <S.MenuItemText href="/" title="Linked-in">
                @ohgosch
              </S.MenuItemText>
            </S.MenuItemIconWrapper>
          </S.MenuItem>
          <S.MenuItem aria-label="Github">
            <S.MenuItemIconWrapper>
              <GitHubIcon className="icon" aria-hidden />
              <S.MenuItemText href="/" title="GitHub">
                @ohgosch
              </S.MenuItemText>
            </S.MenuItemIconWrapper>
          </S.MenuItem>
          <S.MenuItem aria-label="WhatsApp">
            <S.MenuItemIconWrapper>
              <WhatsAppIcon className="icon" aria-hidden />
              <S.MenuItemText href="/" title="WhatsApp">
                +XX XX XXXXX-XXXX
              </S.MenuItemText>
            </S.MenuItemIconWrapper>
          </S.MenuItem>
        </S.Menu>
      </S.Content>
    </S.Container>
  );
};

export default withTranslation()(Header);
