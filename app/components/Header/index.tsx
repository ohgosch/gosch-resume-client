'use client';

import { type ISkeleton } from 'interfaces/resume';
import { EnvelopeIcon } from 'lib/statics/icons/EnvelopeIcon';
import { GithubIcon } from 'lib/statics/icons/GithubIcon';
import { LinkedinIcon } from 'lib/statics/icons/LinkedinIcon';
import { PrintIcon } from 'lib/statics/icons/PrintIcon';
import { SoundIcon } from 'lib/statics/icons/SoundIcon';
import { WhatsAppIcon } from 'lib/statics/icons/WhatsAppIcon';
import { LogoImage } from 'lib/statics/LogoImage';
import { useI18n, useScopedI18n } from 'locales/client';
import { useCallback, useMemo, useRef } from 'react';
import { formatPhone } from 'utils/format';

import * as S from './styles';

export interface HeaderProps {
  forceBorder?: boolean;
  skeleton: ISkeleton;
}

const Header = ({ forceBorder, skeleton: { attributes } }: HeaderProps) => {
  /*
   * Store's
   * */
  const scopedT = useScopedI18n('header');
  const t = useI18n();

  /*
   * Ref's
   * */
  const playerRef = useRef<HTMLAudioElement>(null);

  /*
   * State's
   * */

  /*
   * Memo's
   * */
  const phoneMasked = useMemo(
    () => formatPhone(attributes.phone),
    [attributes.phone],
  );

  /*
   * Callback's
   * */
  const triggerPlayAudio = useCallback(() => {
    void playerRef?.current?.play();
  }, []);

  /*
   * Effect's
   * */

  return (
    <S.Container forceBorder={forceBorder}>
      <S.Title>{t('common.name')}</S.Title>
      <S.Content>
        <S.LogoWrapper>
          <LogoImage />
        </S.LogoWrapper>

        <S.Menu aria-label={scopedT('social-media')}>
          <S.MenuItem aria-label="Linked-in">
            <S.MenuItemIconWrapper>
              <LinkedinIcon aria-hidden />
              <S.MenuItemText
                href={`https://linkedin.com/in/${attributes.linkedin}`}
                target="_blank"
                title="Linked-in"
              >
                @{attributes.linkedin}
              </S.MenuItemText>
            </S.MenuItemIconWrapper>
          </S.MenuItem>
          <S.MenuItem aria-label="Github">
            <S.MenuItemIconWrapper>
              <GithubIcon aria-hidden />
              <S.MenuItemText
                href={`https://github.com/${attributes.github}`}
                target="_blank"
                title="GitHub"
              >
                @{attributes.github}
              </S.MenuItemText>
            </S.MenuItemIconWrapper>
          </S.MenuItem>
          <S.MenuItem aria-label="WhatsApp">
            <S.MenuItemIconWrapper>
              <WhatsAppIcon aria-hidden />
              <S.MenuItemText
                href={`https://wa.me/${attributes.phone}`}
                target="_blank"
                title="WhatsApp"
              >
                {phoneMasked}
              </S.MenuItemText>
            </S.MenuItemIconWrapper>
          </S.MenuItem>
          {!!attributes.email && (
            <S.MenuItem aria-label={scopedT('mail')}>
              <S.MenuItemIconWrapper>
                <EnvelopeIcon aria-hidden />
                <S.MenuItemText
                  href={`mailto:${attributes.email}`}
                  target="_blank"
                  title={scopedT('mail')}
                >
                  {attributes.email}
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
