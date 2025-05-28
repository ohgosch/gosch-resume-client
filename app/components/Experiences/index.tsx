import { BlocksRenderer } from '@strapi/blocks-react-renderer';
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
  const locale = await getCurrentLocale();

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
        <S.Experience key={experience.slug}>
          <S.Header>
            <S.HeaderContent>
              <Heading2>{experience.company}</Heading2>
              <S.Date aria-label={t('period')}>
                {formatDate(parseISO(experience.startDate), 'MMM/yyyy', locale)}
                {!!experience.endDate &&
                  ` - ${formatDate(
                    parseISO(experience.endDate),
                    'MMM/yyyy',
                    locale,
                  )}`}
              </S.Date>
            </S.HeaderContent>
            <S.Role aria-label={t('role')}>{experience.role}</S.Role>
          </S.Header>
          <S.LogoWrapper aria-hidden $small={!experience.logo}>
            {!!experience.logo?.url && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={formatStaticURL(experience.logo.url)}
                alt={experience.logo.alternativeText ?? ''}
              />
            )}
          </S.LogoWrapper>
          <S.DescriptionWrap>
            {experience?.description_rich ? (
              <S.DescriptionRich>
                <BlocksRenderer content={experience.description_rich} />
              </S.DescriptionRich>
            ) : (
              <S.Description>{experience.description}</S.Description>
            )}
          </S.DescriptionWrap>
        </S.Experience>
      ))}
    </S.Container>
  );
};

export default Experiences;
