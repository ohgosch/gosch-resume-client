import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'react-i18next';

import { getResume } from 'logic/services/resume';
import ResumeTemplate from 'templates/Resume';
import Header from 'components/Header';
import SEO from 'components/SEO';

const Page = ({ data }) => {
  const { t } = useTranslation();

  return (
    <>
      <SEO title={t('resume')} />
      <Header data={data.social_medias} />
      <ResumeTemplate data={data} />
    </>
  );
};

export async function getStaticProps({ locale }) {
  const {
    object: { metadata },
  } = await getResume();

  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'header'])),
      data: metadata,
    },
  };
}

export default Page;
