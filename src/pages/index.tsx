import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'react-i18next';

import ResumeTemplate from 'templates/Resume';
import SEO from 'components/SEO';

const Page = () => {
  const { t } = useTranslation();
  return (
    <>
      <SEO title={t('resume')} />
      <ResumeTemplate />
    </>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common', 'header'])),
  },
});

export default Page;
