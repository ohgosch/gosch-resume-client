import { useTranslation } from 'next-i18next';

import TrincaLogo from 'public/assets/img/trinca.svg';

import { Heading2 } from 'visual/styles/Texts';

import * as S from './styles';

const Experiences = () => {
  const { t } = useTranslation();

  return (
    <S.Container>
      <S.Experience>
        <S.Header>
          <S.HeaderContent>
            <Heading2>Trinca</Heading2>
            <S.Date aria-label={t('period')}>ago/2019 - may/2020</S.Date>
          </S.HeaderContent>
          <S.Role aria-label={t('role')}>Front-end Developer</S.Role>
        </S.Header>
        <S.LogoWrapper aria-hidden>
          <TrincaLogo />
        </S.LogoWrapper>
        <S.Description>
          Working with a SaaS application using Next.js, TypeScript, Jest,
          Styled Components, testing-library and git for version control.
        </S.Description>
      </S.Experience>
      <S.Experience>
        <S.Header>
          <S.HeaderContent>
            <Heading2>Trinca</Heading2>
            <S.Date aria-label={t('period')}>ago/2019 - may/2020</S.Date>
          </S.HeaderContent>
          <S.Role aria-label={t('role')}>Front-end Developer</S.Role>
        </S.Header>
        <S.LogoWrapper aria-hidden>
          <TrincaLogo />
        </S.LogoWrapper>
        <S.Description>
          Working with a SaaS application using Next.js, TypeScript, Jest,
          Styled Components, testing-library and git for version control.
        </S.Description>
      </S.Experience>
    </S.Container>
  );
};

export default Experiences;
