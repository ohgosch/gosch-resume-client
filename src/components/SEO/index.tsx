import { useTranslation } from 'next-i18next';
import Head from 'next/head';

import config from 'config';

type SEOProps = {
  description?: string;
  title?: string;
};

const SEO = ({ description, title }: SEOProps) => {
  const siteTitle = config.title;
  const { t } = useTranslation();

  return (
    <Head>
      <title>{`${title ? `${title} - ` : ''}${siteTitle}`}</title>
      <meta
        name="description"
        content={description ? description : t('description')}
      />
      <meta name="author" content={config.author.name} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta
        property="og:image"
        content="/assets/img/seo/linkedin-preview.png"
      />
      <meta
        property="og:description"
        content={description ? description : t('description')}
      />
      <meta property="og:site_name" content={siteTitle} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary" />
      <meta property="twitter:creator" content={config.social.twitter} />
      <meta property="twitter:title" content={title} />
      <meta
        property="twitter:description"
        content={description ? description : t('description')}
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

SEO.defaultProps = {
  description: '',
  title: '',
};

export default SEO;
