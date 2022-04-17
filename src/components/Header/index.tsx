import { useTranslation } from 'next-i18next';
import { useMemo } from 'react';

import WhatsAppIcon from 'public/assets/img/icon/whatsapp.svg';
import LinkedInIcon from 'public/assets/img/icon/linkedin.svg';
import GitHubIcon from 'public/assets/img/icon/github.svg';
import PrintIcon from 'public/assets/img/icon/print.svg';
import SoundIcon from 'public/assets/img/icon/sound.svg';
import Logo from 'public/assets/img/logo.svg';

import { SocialMedia } from 'types/Api';

import * as S from './styles';

export type HeaderProps = {
  forceBorder?: boolean;
  data: SocialMedia[];
};

const Header = ({ forceBorder, data }: HeaderProps) => {
  const { t } = useTranslation(['header', 'common']);

  const linkedinData = data.find((item) => item.slug === 'linkedin');
  const githubData = data.find((item) => item.slug === 'github');
  const whatsappData = data.find((item) => item.slug === 'whatsapp');
  const audioPlayer = useMemo(() => {
    if (typeof window !== 'undefined') {
      return window?.document?.getElementById('player');
    }
  }, []) as HTMLAudioElement;

  return (
    <S.Container forceBorder={forceBorder}>
      <S.Title>{t('name', { ns: 'common' })}</S.Title>
      <S.Content>
        <S.LogoWrapper>
          <Logo id="logo" aria-label={t('logo-alt')} />
        </S.LogoWrapper>

        <S.Menu aria-label={t('social-media')}>
          {!!linkedinData && (
            <S.MenuItem aria-label="Linked-in">
              <S.MenuItemIconWrapper>
                <LinkedInIcon className="icon" aria-hidden />
                <S.MenuItemText
                  href={linkedinData?.url}
                  target="_blank"
                  title="Linked-in"
                >
                  {linkedinData?.display}
                </S.MenuItemText>
              </S.MenuItemIconWrapper>
            </S.MenuItem>
          )}
          {!!githubData && (
            <S.MenuItem aria-label="Github">
              <S.MenuItemIconWrapper>
                <GitHubIcon className="icon" aria-hidden />
                <S.MenuItemText
                  href={githubData.url}
                  target="_blank"
                  title="GitHub"
                >
                  {githubData.display}
                </S.MenuItemText>
              </S.MenuItemIconWrapper>
            </S.MenuItem>
          )}
          {!!whatsappData && (
            <S.MenuItem aria-label="WhatsApp">
              <S.MenuItemIconWrapper>
                <WhatsAppIcon className="icon" aria-hidden />
                <S.MenuItemText
                  href={whatsappData.url}
                  target="_blank"
                  title="WhatsApp"
                >
                  {whatsappData.display}
                </S.MenuItemText>
              </S.MenuItemIconWrapper>
            </S.MenuItem>
          )}
        </S.Menu>
        <S.Infos>
          <S.Info onClick={() => window.print()} hideInMobile>
            <PrintIcon />
            {t('print')}
          </S.Info>
          {!!audioPlayer && (
            <S.Info onClick={() => audioPlayer?.play()}>
              <SoundIcon />
              {t('listen-my-name')}
            </S.Info>
          )}
          <S.Player id="player">
            <source src="/assets/audio/gosch.mp3" type="audio/mpeg" />
          </S.Player>
        </S.Infos>
      </S.Content>
    </S.Container>
  );
};

export default Header;
