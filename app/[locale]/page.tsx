import Courses from 'components/Courses';
import CoverLetter from 'components/CoverLetter';
import Experiences from 'components/Experiences';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Navbar from 'components/Navbar';
import Section from 'components/Section';
import Skills from 'components/Skills';
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
    pageTitle: t('common.resume'),
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
      <Header skeleton={skeleton} />
      <S.Container>
        <Navbar />
        <S.Content>
          <Section id="summary">
            <Wrapper $middle>
              <CoverLetter />
            </Wrapper>
          </Section>
          <Section name={t('experiences')} id="experiences">
            <Wrapper>
              <Experiences />
            </Wrapper>
          </Section>
          <Section name={t('skills')} id="skills">
            <Wrapper>
              <Skills />
            </Wrapper>
          </Section>
          <Section name={t('courses')} id="education">
            <Wrapper $middle>
              <Courses />
            </Wrapper>
          </Section>
        </S.Content>
      </S.Container>
      <Footer />
    </>
  );
}
