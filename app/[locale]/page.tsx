import Courses from 'components/Courses';
import CoverLetter from 'components/CoverLetter';
import Experiences from 'components/Experiences';
import Footer from 'components/Footer';
import Header from 'components/Header';
import Navbar from 'components/Navbar';
import Section from 'components/Section';
import Skills from 'components/Skills';
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
  setStaticParamsLocale(locale);

  const t = await getScopedI18n('common');

  const {
    object: { metadata: data },
  } = await getResume(locale as TLocale);

  return (
    <>
      <Header socialMedias={data.social_medias} />
      <S.Container>
        <Navbar />
        <S.Content>
          <Section name={t('cover-letter')} id="cover-letter">
            <Wrapper $middle>
              <CoverLetter />
            </Wrapper>
          </Section>
          <Section name={t('skills')} id="skills">
            <Wrapper $middle>
              <Skills />
            </Wrapper>
          </Section>
          <Section name={t('experiences')} id="experiences">
            <Wrapper>
              <Experiences experiences={data.experiences} />
            </Wrapper>
          </Section>
          <Section name={t('courses')} id="courses">
            <Wrapper $middle>
              <Courses data={data.courses} />
            </Wrapper>
          </Section>
        </S.Content>
      </S.Container>
      <Footer />
    </>
  );
}
