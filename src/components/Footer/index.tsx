import { useTranslation } from 'next-i18next';

import LogoSmall from 'public/assets/img/logo-small.svg';

import * as S from './styles';

const Footer = () => {
  const { t } = useTranslation(['footer']);

  return (
    <S.Container>
      <LogoSmall />
      <S.Text>{t('development')}</S.Text>
    </S.Container>
  );
};

export default Footer;
