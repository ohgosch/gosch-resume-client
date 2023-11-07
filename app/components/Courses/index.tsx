import { getCurrentLocale, getScopedI18n } from 'locales/server';
import { type CourseResponse } from 'types/Api';
import { formatDate } from 'utils/format';

import * as S from './styles';

export interface CoursesProps {
  data: CourseResponse[];
}

const Courses = async ({ data }: CoursesProps) => {
  const locale = getCurrentLocale();
  const t = await getScopedI18n('common');

  return (
    <S.Container>
      {data.map((course) => (
        <S.Course key={course.institution_name + course.start_date}>
          <S.CourseContent>
            <S.Title>{course.institution_name}</S.Title>
            <S.Subtitle>{course.course_title}</S.Subtitle>
            <S.Date aria-label={t('period')}>
              {formatDate(course.start_date, 'MMM/yyyy', locale)}
              {course.end_date &&
                ` - ${formatDate(course.end_date, 'MMM/yyyy', locale)}`}
            </S.Date>
          </S.CourseContent>
        </S.Course>
      ))}
    </S.Container>
  );
};

export default Courses;
