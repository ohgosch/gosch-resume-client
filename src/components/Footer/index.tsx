import LogoSmall from 'public/assets/img/logo-small.svg';

import * as S from './styles';

const Footer = () => {
  return (
    <S.Container>
      <LogoSmall />
      <S.Text>developed using Next.js and Strapi</S.Text>
    </S.Container>
  );
};

export default Footer;
