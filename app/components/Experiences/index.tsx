import { parseISO } from 'date-fns';
import { getExperiences } from 'lib/logic/services/resume.service';
import { Heading2 } from 'lib/visual/styles/Texts';
import type { TLocale } from 'locales/i18n.config';
import { getCurrentLocale, getScopedI18n } from 'locales/server';
import { formatDate, formatStaticURL } from 'utils/format';

import * as S from './styles';

const Experiences = async () => {
  /*
   * Store's
   * */
  const locale = getCurrentLocale();

  /*
   * Request's
   * */
  const t = await getScopedI18n('common');

  const {
    data: { data: experiences },
  } = await getExperiences(locale as TLocale);

  return (
    <S.Container>
      {experiences.map((experience) => (
        <S.Experience key={experience.attributes.slug}>
          <S.Header>
            <S.HeaderContent>
              <Heading2>{experience.attributes.company}</Heading2>
              <S.Date aria-label={t('period')}>
                {formatDate(
                  parseISO(experience.attributes.startDate),
                  'MMM/yyyy',
                  locale,
                )}
                {!!experience.attributes.endDate &&
                  ` - ${formatDate(
                    parseISO(experience.attributes.endDate),
                    'MMM/yyyy',
                    locale,
                  )}`}
              </S.Date>
            </S.HeaderContent>
            <S.Role aria-label={t('role')}>{experience.attributes.role}</S.Role>
          </S.Header>
          <S.LogoWrapper aria-hidden $small={!experience.attributes.logo.data}>
            {!!experience.attributes.logo.data?.attributes.url && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={formatStaticURL(
                  experience.attributes.logo.data.attributes.url,
                )}
                alt={
                  experience.attributes.logo.data.attributes.alternativeText ??
                  ''
                }
              />
            )}
          </S.LogoWrapper>
          <S.Description>{experience.attributes.description}</S.Description>
        </S.Experience>
      ))}
    </S.Container>
  );
};

export default Experiences;
