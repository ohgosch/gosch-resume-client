import { parseISO } from 'date-fns';
import { getCourses } from 'lib/logic/services/resume.service';
import type { TLocale } from 'locales/i18n.config';
import { getCurrentLocale, getScopedI18n } from 'locales/server';
import { formatDate } from 'utils/format';

import * as S from './styles';

const Courses = async () => {
  /*
   * Store's
   * */
  const locale = await getCurrentLocale();

  /*
   * Request's
   * */
  const t = await getScopedI18n('common');

  const {
    data: { data: courses },
  } = await getCourses(locale as TLocale);

  return (
    <S.Container>
      {courses.map((course) => (
        <S.Course key={course.documentId}>
          <S.CourseContent>
            <S.Title>{course.institution}</S.Title>
            <S.Subtitle>{course.description}</S.Subtitle>
            <S.Date aria-label={t('period')}>
              {formatDate(parseISO(course.startDate), 'MMM/yyyy', locale)}
              {course.endDate &&
                ` - ${formatDate(
                  parseISO(course.endDate),
                  'MMM/yyyy',
                  locale,
                )}`}
            </S.Date>
          </S.CourseContent>
        </S.Course>
      ))}
    </S.Container>
  );
};

export default Courses;
