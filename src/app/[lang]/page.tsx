import { Metadata } from 'next';
import { setStaticParamsLocale } from 'next-international/server';

import { Header } from '@/components/Header';
import { RichText } from '@/components/RichText';
import { TLang } from '@/locales/i18n.config';
import { getI18n, getStaticParams } from '@/locales/server';
import {
  getCourses,
  getCoverLetter,
  getExperiences,
  getSkeleton,
  getSkillsSection,
} from '@/services/resume.service';
import { formatDate, formatPhone } from '@/utils/format';

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;

  const skeleton = (await getSkeleton(lang)).data;
  const title = `${skeleton.name} - ${skeleton.title}`;
  const images = `/img/seo/card_${lang}.png`;
  const description = skeleton.description;

  return {
    title,
    description,
    metadataBase: new URL(`https://${process.env.NEXT_PUBLIC_URL}`),
    alternates: {
      languages: {
        'pt-BR': '/pt-BR',
        'en-US': '/en-US',
      },
    },
    twitter: {
      card: 'summary',
      images,
    },
    openGraph: {
      type: 'website',
      title,
      images,
      locale: lang,
      description,
      siteName: skeleton.name,
    },
  };
}

export function generateStaticParams() {
  return getStaticParams().map((params) => ({
    ...params,
    lang: params.locale,
  }));
}

interface Props {
  params: Promise<{ lang: TLang }>;
}

export default async function Page(props: Props) {
  const params = await props.params;
  /*
   * Store's
   * */
  const { lang } = params;
  setStaticParamsLocale(lang);
  const t = await getI18n();

  /*
   * Request's
   * */
  const skeleton = await getSkeleton(lang);

  const [coverLetter, courses, experiences, skills] = await Promise.all([
    getCoverLetter(lang),
    getCourses(lang),
    getExperiences(lang, skeleton.data.experiences_limit),
    getSkillsSection(lang),
  ]);

  /*
   * Variable's
   * */
  const phoneMasked = formatPhone(skeleton?.data.phone);
  const experiencesRest =
    experiences.meta.pagination.total - experiences.meta.pagination.pageSize;

  return (
    <div className="w-11/12 max-w-4xl m-auto py-8 flex flex-col gap-8">
      <Header data={skeleton.data} />
      <ul className="flex justify-between flex-wrap text-base">
        <li className="menu-item">
          <a target="_blank" href={`mailto:${skeleton.data.email}`}>
            {skeleton.data.email}
          </a>
        </li>
        <li className="menu-item">
          <a target="_blank" href={`tel:${skeleton?.data.phone}`}>
            {phoneMasked}
          </a>
        </li>
        <li className="menu-item">
          <a
            target="_blank"
            href={`https://www.linkedin.com/in/${skeleton.data.linkedin}`}
          >
            linkedin.com/in/{skeleton.data.linkedin}
          </a>
        </li>
        <li className="menu-item">
          <a
            target="_blank"
            href={`https://github.com/${skeleton.data.github}`}
          >
            github.com/{skeleton.data.github}
          </a>
        </li>
      </ul>
      <main className="flex flex-col gap-8">
        <section className="rich-container text-justify">
          <h2 className="sr-only">{t('overview')}</h2>
          <RichText content={coverLetter.data.coverLetterContent} />
        </section>
        <section className="section">
          <h2 className="section-title">{t('experiences')}</h2>
          <div className="grid gap-4">
            {experiences.data.map((experience) => (
              <article className="grid gap-3" key={experience.documentId}>
                <header className="grid md:flex md:justify-between">
                  <div className="grid">
                    <h3 className="text-lg font-bold">
                      {experience.role}
                      <span className="font-normal">
                        , {experience.company}
                      </span>
                    </h3>
                    <span className=" text-xs text-neutral-500 lowercase">
                      {experience.skills.map((skill) => skill.name).join(' • ')}
                    </span>
                  </div>
                  <div className="grid">
                    <span className="md:text-right whitespace-nowrap lowercase max-md:order-2">
                      {formatDate(experience.startDate, lang)} -{' '}
                      {formatDate(experience.endDate, lang) ?? t('current')}
                    </span>
                    <span className="md:text-right whitespace-nowrap text-xs text-neutral-500 lowercase">
                      {t(`modality.${experience.modality}`)}
                      {!!experience.based_in && `, ${experience.based_in}`}
                    </span>
                  </div>
                </header>
                <div className="rich-container">
                  {!!experience.description_rich && (
                    <RichText content={experience.description_rich} />
                  )}
                </div>
              </article>
            ))}

            {experiencesRest >= 1 && (
              <a
                href={`https://www.linkedin.com/in/${skeleton.data.linkedin}`}
                target="_blank"
                className="text-base underline"
              >
                {t('moreExperiences', { quantity: experiencesRest })}
              </a>
            )}
          </div>
        </section>
        <section className="section">
          <h2 className="section-title">{t('education')}</h2>
          <div className="grid gap-4">
            {courses.data.map((course) => (
              <article className="grid gap-3" key={course.documentId}>
                <header className="flex justify-between">
                  <div className="grid">
                    <h3 className="text-lg font-bold">
                      {course.description}
                      <span className="font-normal">
                        , {course.institution}
                      </span>
                    </h3>
                    <span className="whitespace-nowrap lowercase">
                      {formatDate(course.startDate, lang)} -{' '}
                      {formatDate(course.endDate, lang) ?? t('current')}
                    </span>
                  </div>
                </header>
              </article>
            ))}
          </div>
        </section>
        <section className="section">
          <h2 className="section-title">{t('skills')}</h2>
          <ul className="flex flex-wrap gap-1">
            {skills.data.skills.map((skill) => (
              <li className="tag" key={skill.documentId}>
                {skill.name}
              </li>
            ))}
          </ul>
        </section>
        <section className="section">
          <h2 className="section-title">{t('languages')}</h2>
          <div className="rich-container">
            <RichText content={skeleton.data.languages} />
          </div>
        </section>
      </main>
    </div>
  );
}
