'use client';

import { EnvelopeIcon } from 'lib/statics/icons/EnvelopeIcon';
import { GithubIcon } from 'lib/statics/icons/GithubIcon';
import { LinkedinIcon } from 'lib/statics/icons/LinkedinIcon';
import { PrintIcon } from 'lib/statics/icons/PrintIcon';
import { SoundIcon } from 'lib/statics/icons/SoundIcon';
import { WhatsAppIcon } from 'lib/statics/icons/WhatsAppIcon';
import { LogoImage } from 'lib/statics/LogoImage';
import { useI18n, useScopedI18n } from 'locales/client';
import { useCallback, useRef } from 'react';
import { type SocialMedia } from 'types/Api';

import * as S from './styles';

export interface HeaderProps {
  forceBorder?: boolean;
  socialMedias: SocialMedia[];
}

const Header = ({ forceBorder, socialMedias }: HeaderProps) => {
  const scopedT = useScopedI18n('header');
  const t = useI18n();

  const playerRef = useRef<HTMLAudioElement>(null);

  const linkedinData = socialMedias?.find((item) => item.slug === 'linkedin');
  const githubData = socialMedias?.find((item) => item.slug === 'github');
  const whatsappData = socialMedias?.find((item) => item.slug === 'whatsapp');
  const mailData = socialMedias?.find((item) => item.slug === 'mail');

  const triggerPlayAudio = useCallback(() => {
    void playerRef?.current?.play();
  }, []);

  return (
    <S.Container forceBorder={forceBorder}>
      <S.Title>{t('common.name')}</S.Title>
      <S.Content>
        <S.LogoWrapper>
          <LogoImage />
        </S.LogoWrapper>

        <S.Menu aria-label={scopedT('social-media')}>
          {!!linkedinData && (
            <S.MenuItem aria-label="Linked-in">
              <S.MenuItemIconWrapper>
                <LinkedinIcon aria-hidden />
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
                <GithubIcon aria-hidden />
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
                <WhatsAppIcon aria-hidden />
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
          {!!mailData && (
            <S.MenuItem aria-label={scopedT('mail')}>
              <S.MenuItemIconWrapper>
                <EnvelopeIcon aria-hidden />
                <S.MenuItemText
                  href={mailData.url}
                  target="_blank"
                  title={scopedT('mail')}
                >
                  {mailData.display}
                </S.MenuItemText>
              </S.MenuItemIconWrapper>
            </S.MenuItem>
          )}
        </S.Menu>
        <S.Infos>
          <S.Info
            onClick={() => {
              window.print();
            }}
            $hideInMobile
          >
            <PrintIcon />
            {scopedT('print')}
          </S.Info>
          <S.Info onClick={triggerPlayAudio}>
            <SoundIcon />
            {scopedT('listen-my-name')}
          </S.Info>
          <S.Player id="player" ref={playerRef}>
            <source src="/assets/audio/gosch.mp3" type="audio/mpeg" />
          </S.Player>
        </S.Infos>
      </S.Content>
    </S.Container>
  );
};

export default Header;
