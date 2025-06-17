import CoverLetter from 'components/CoverLetter';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Section from 'components/Section';
import { getSkeleton } from 'lib/logic/services/resume.service';
import Wrapper from 'lib/visual/styles/Wrapper';
import { type TLocale } from 'locales/i18n.config';
import { getI18n, getScopedI18n, getStaticParams } from 'locales/server';
import type { Metadata } from 'next';
import { setStaticParamsLocale } from 'next-international/server';
import { getMetadata } from 'utils/getMetadata.utils';

import * as S from './styles';

interface Props {
  params: Promise<{ locale: TLocale }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const t = await getI18n();
  const { locale } = await params;

  return await getMetadata({
    pageTitle: t('common.summary'),
    locale,
  });
}

export function generateStaticParams() {
  return getStaticParams();
}

export default async function Page(props: Props) {
  const params = await props.params;
  /*
   * Store's
   * */
  const { locale } = params;
  setStaticParamsLocale(locale);

  /*
   * Request's
   * */
  const t = await getScopedI18n('common');

  const {
    data: { data: skeleton },
  } = await getSkeleton(locale as TLocale);

  return (
    <>
      <Header skeleton={skeleton} $forceBorder />
      <S.Container>
        <S.Content>
          <Section name={t('summary')} id="summary">
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
