import { getI18n } from 'locales/server';
import { type Metadata } from 'next';

interface IGetMetadataParams {
  pageTitle?: string;
  pageDescription?: string;
  locale?: string;
}

export const getMetadata = async ({
  pageTitle,
  pageDescription,
  locale,
}: IGetMetadataParams): Promise<Metadata> => {
  const t = await getI18n();
  const siteName = t('common.name');
  const title = pageTitle ? `${pageTitle} - ${siteName}` : siteName;
  const description = pageDescription ?? t('common.description');
  const images = '/assets/img/seo/linkedin-preview.png';

  return {
    title,
    description,
    authors: { name: 'Gosch' },
    twitter: {
      card: 'summary',
      images,
    },
    openGraph: {
      type: 'website',
      title,
      images,
      locale,
      description,
      siteName,
    },
  };
};
