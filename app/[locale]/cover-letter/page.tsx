import CoverLetter from 'components/CoverLetter';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Section from 'components/Section';
import { getResume } from 'lib/logic/services/resume';
import Wrapper from 'lib/visual/styles/Wrapper';
import { type TLocale } from 'locales/i18n.config';
import { getI18n, getScopedI18n, getStaticParams } from 'locales/server';
import type { Metadata } from 'next';
import { setStaticParamsLocale } from 'next-international/server';

import * as S from './styles';

interface Props {
  params: { locale: string };
}

export async function generateMetadata(): Promise<Metadata> {
  const t = await getI18n();

  return {
    title: `${t('common.resume')} - ${t('common.name')}`,
    description: t('common.description'),
  };
}

export function generateStaticParams() {
  return getStaticParams();
}

export default async function Page({ params }: Props) {
  const { locale } = params;
  const t = await getScopedI18n('common');

  setStaticParamsLocale(locale);

  const {
    object: { metadata: data },
  } = await getResume(locale as TLocale);

  return (
    <>
      <Header socialMedias={data.social_medias} forceBorder />
      <S.Container>
        <S.Content>
          <Section name={t('cover-letter')} id="cover-letter">
            <Wrapper $middle>
              <CoverLetter />
            </Wrapper>
          </Section>
        </S.Content>
      </S.Container>
      <Footer />
    </>
  );
}
