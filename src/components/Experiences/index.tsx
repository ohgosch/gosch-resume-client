import { useTranslation } from 'next-i18next';

import { Heading2 } from 'visual/styles/Texts';
import { ExperienceResponse } from 'types/Api';
import { formatDate } from 'utils/format';

import * as S from './styles';

type ExperiencesProps = {
  data: ExperienceResponse[];
};

const Experiences = ({ data }: ExperiencesProps) => {
  const { t, i18n } = useTranslation();

  return (
    <S.Container>
      {data.map((experience) => (
        <S.Experience key={experience.company_name + experience.start_date}>
          <S.Header>
            <S.HeaderContent>
              <Heading2>{experience.company_name}</Heading2>
              <S.Date aria-label={t('period')}>
                {formatDate(experience.start_date, 'MMM/yyyy', i18n.language)}
                {experience.end_date &&
                  ` - ${formatDate(
                    experience.end_date,
                    'MMM/yyyy',
                    i18n.language,
                  )}`}
              </S.Date>
            </S.HeaderContent>
            <S.Role aria-label={t('role')}>{experience.role}</S.Role>
          </S.Header>
          <S.LogoWrapper aria-hidden small={!experience?.company_logo?.url}>
            {!!experience.company_logo?.url && (
              <img src={experience.company_logo.url} alt="" />
            )}
          </S.LogoWrapper>
          <S.Description>{experience.description}</S.Description>
        </S.Experience>
      ))}
    </S.Container>
  );
};

export default Experiences;
