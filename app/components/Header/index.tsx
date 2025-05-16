'use client';

import { type ISkeleton } from 'interfaces/resume';
import { EnvelopeIcon } from 'lib/statics/icons/EnvelopeIcon';
import { GithubIcon } from 'lib/statics/icons/GithubIcon';
import { LinkedinIcon } from 'lib/statics/icons/LinkedinIcon';
import { PDFIcon } from 'lib/statics/icons/PDFIcon';
import { WhatsAppIcon } from 'lib/statics/icons/WhatsAppIcon';
import { useI18n, useScopedI18n } from 'locales/client';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';
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
  const pathname = usePathname();

  /*
   * Memo's
   * */
  const phoneMasked = useMemo(
    () => formatPhone(attributes.phone),
    [attributes.phone],
  );

  return (
    <S.Container forceBorder={forceBorder}>
      <S.Content>
        <S.TitleWrapper>
          <S.Title>{t('common.name')}</S.Title>
        </S.TitleWrapper>

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
        </S.Menu>
        <S.Infos>
          <S.Info
            $hideInMobile
            href={`/api/pdf?origin=${pathname}`}
            target="_blank"
          >
            <PDFIcon />
            {scopedT('print')}
          </S.Info>
        </S.Infos>
      </S.Content>
    </S.Container>
  );
};

export default Header;
