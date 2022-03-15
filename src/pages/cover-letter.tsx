import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'react-i18next';

import CoverLetterTemplate from 'templates/CoverLetter';
import SEO from 'components/SEO';

const Page = () => {
  const { t } = useTranslation();
  return (
    <>
      <SEO title={t('cover-letter')} />
      <CoverLetterTemplate />
    </>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'header'])),
  },
});

export default Page;
