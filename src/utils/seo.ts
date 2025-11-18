import { Metadata } from 'next';

interface IGenerateSEOMetadata {
  title: string;
  description: string;
  siteName: string;
  lang: string;
}

export function generateSEOMetadata({
  title,
  description,
  siteName,
  lang,
}: IGenerateSEOMetadata): Metadata {
  const images = `/img/seo/card_${lang}.png`;

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
      siteName,
    },
  };
}
