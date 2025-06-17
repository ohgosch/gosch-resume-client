'use client';

import { type ISkeleton } from 'interfaces/resume';
import { EnvelopeIcon } from 'lib/statics/icons/EnvelopeIcon';
import { GithubIcon } from 'lib/statics/icons/GithubIcon';
import { LinkedinIcon } from 'lib/statics/icons/LinkedinIcon';
import { PrintIcon } from 'lib/statics/icons/PrintIcon';
import { WhatsAppIcon } from 'lib/statics/icons/WhatsAppIcon';
import { useI18n, useScopedI18n } from 'locales/client';
import { useMemo } from 'react';
import { formatPhone } from 'utils/format';

import * as S from './styles';

export interface HeaderProps {
  $forceBorder?: boolean;
  skeleton: ISkeleton;
}

const Header = ({ $forceBorder, skeleton }: HeaderProps) => {
  /*
   * Store's
   * */
  const scopedT = useScopedI18n('header');
  const t = useI18n();

  /*
   * Memo's
   * */
  const phoneMasked = useMemo(
    () => formatPhone(skeleton?.phone),
    [skeleton?.phone],
  );

  return (
    <S.Container $forceBorder={$forceBorder}>
      <S.Content>
        <S.TitleWrapper>
          <S.Title>{t('common.name')}</S.Title>
        </S.TitleWrapper>

        <S.Menu aria-label={scopedT('social-media')}>
          <S.MenuItem aria-label="Linked-in">
            <S.MenuItemIconWrapper>
              <LinkedinIcon aria-hidden />
              <S.MenuItemText
                href={`https://linkedin.com/in/${skeleton?.linkedin}`}
                target="_blank"
                title="Linked-in"
              >
                linkedin.com/in/{skeleton?.linkedin}
              </S.MenuItemText>
            </S.MenuItemIconWrapper>
          </S.MenuItem>
          <S.MenuItem aria-label="Github">
            <S.MenuItemIconWrapper>
              <GithubIcon aria-hidden />
              <S.MenuItemText
                href={`https://github.com/${skeleton?.github}`}
                target="_blank"
                title="GitHub"
              >
                github.com/{skeleton?.github}
              </S.MenuItemText>
            </S.MenuItemIconWrapper>
          </S.MenuItem>
          <S.MenuItem aria-label={scopedT('mail')}>
            <S.MenuItemIconWrapper>
              <EnvelopeIcon aria-hidden />
              <S.MenuItemText
                href={`mailto:${skeleton.email}`}
                target="_blank"
                title={scopedT('mail')}
              >
                {skeleton.email}
              </S.MenuItemText>
            </S.MenuItemIconWrapper>
          </S.MenuItem>
          <S.MenuItem aria-label="WhatsApp">
            <S.MenuItemIconWrapper>
              <WhatsAppIcon aria-hidden />
              <S.MenuItemText
                href={`https://wa.me/${skeleton.phone}`}
                target="_blank"
                title="WhatsApp"
              >
                {phoneMasked}
              </S.MenuItemText>
            </S.MenuItemIconWrapper>
          </S.MenuItem>
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
        </S.Infos>
      </S.Content>
    </S.Container>
  );
};

export default Header;
