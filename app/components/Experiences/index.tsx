import { Heading2 } from 'lib/visual/styles/Texts';
import { getCurrentLocale, getScopedI18n } from 'locales/server';
import { type ExperienceResponse } from 'types/Api';
import { formatDate } from 'utils/format';

import * as S from './styles';

interface ExperiencesProps {
  experiences: ExperienceResponse[];
}

const Experiences = async ({ experiences }: ExperiencesProps) => {
  const locale = getCurrentLocale();
  const t = await getScopedI18n('common');

  return (
    <S.Container>
      {experiences.map((experience) => (
        <S.Experience key={experience.company_name + experience.start_date}>
          <S.Header>
            <S.HeaderContent>
              <Heading2>{experience.company_name}</Heading2>
              <S.Date aria-label={t('period')}>
                {formatDate(experience.start_date, 'MMM/yyyy', locale)}
                {!!experience.end_date &&
                  ` - ${formatDate(experience.end_date, 'MMM/yyyy', locale)}`}
              </S.Date>
            </S.HeaderContent>
            <S.Role aria-label={t('role')}>{experience.role}</S.Role>
          </S.Header>
          <S.LogoWrapper aria-hidden $small={!experience?.company_logo?.url}>
            {!!experience.company_logo?.url && (
              // eslint-disable-next-line @next/next/no-img-element
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
