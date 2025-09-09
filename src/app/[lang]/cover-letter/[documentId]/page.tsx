import { Metadata } from 'next';
import { setStaticParamsLocale } from 'next-international/server';

import { Header } from '@/components/Header';
import { getI18n, getStaticParams } from '@/locales/server';
import {
  getCompanyCoverLetterItem,
  getCompanyCoverLetterList,
  getSkeleton,
} from '@/services/resume.service';
import { formatPhone } from '@/utils/format';

export async function generateMetadata({
  params,
}: PageProps<'/[lang]/cover-letter/[documentId]'>): Promise<Metadata> {
  const { lang, documentId } = await params;

  const [skeleton, coverLetter] = await Promise.all([
    getSkeleton(lang),
    getCompanyCoverLetterItem(documentId),
  ]);
  const title = `${skeleton.data.name} - ${skeleton.data.title} - ${coverLetter.data.company}`;
  const images = `/img/seo/card_${lang}.png`;
  const description = skeleton.data.description;

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
      siteName: skeleton.data.name,
    },
  };
}

export async function generateStaticParams() {
  const locales = getStaticParams().map((locales) => locales.locale); // ['pt', 'en']
  const coverLetters = (await getCompanyCoverLetterList()).data;

  const params: { lang: string; documentId: string }[] = [];

  coverLetters.forEach((coverLetter) => {
    locales.forEach((locale) => {
      params.push({ lang: locale, documentId: coverLetter.documentId });
    });
  });

  return params;
}

export default async function Page(
  props: PageProps<'/[lang]/cover-letter/[documentId]'>,
) {
  const params = await props.params;
  /*
   * Store's
   * */
  const { lang, documentId } = params;
  setStaticParamsLocale(lang);
  const t = await getI18n();

  /*
   * Request's
   * */
  const [skeleton, coverLetter] = await Promise.all([
    getSkeleton(lang),
    getCompanyCoverLetterItem(documentId),
  ]);

  /*
   * Variable's
   * */
  const phoneMasked = formatPhone(skeleton?.data.phone);

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
        <section>
          <h2 className="sr-only">{t('overview')}</h2>
          <div
            className="rich-container text-justify"
            dangerouslySetInnerHTML={{ __html: coverLetter.data.content }}
          ></div>
        </section>
      </main>
    </div>
  );
}
