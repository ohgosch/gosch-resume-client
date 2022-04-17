import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'react-i18next';

import CoverLetterTemplate from 'templates/CoverLetter';
import { getResume } from 'logic/services/resume';
import Header from 'components/Header';
import SEO from 'components/SEO';

const Page = ({ data }) => {
  const { t } = useTranslation();
  return (
    <>
      <SEO title={t('cover-letter')} />
      <Header data={data.social_medias} />
      <CoverLetterTemplate data={data} />
    </>
  );
};

export const getStaticProps = async ({ locale }) => {
  const {
    object: { metadata },
  } = await getResume();

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'header', 'footer'])),
      data: metadata,
    },
  };
};

export default Page;
