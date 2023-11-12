import { LogoSmallImage } from 'lib/statics/LogoSmallImage';
import { getScopedI18n } from 'locales/server';

import * as S from './styles';

const Footer = async () => {
  const t = await getScopedI18n('footer');

  return (
    <S.Container>
      <LogoSmallImage />
      <S.Text>{t('development')}</S.Text>
    </S.Container>
  );
};

export default Footer;
