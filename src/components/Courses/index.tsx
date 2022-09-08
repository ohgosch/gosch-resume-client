import { useTranslation } from 'next-i18next';

import { CourseResponse } from 'types/Api';
import { formatDate } from 'utils/format';

import * as S from './styles';

export type CoursesProps = {
  data: CourseResponse[];
};

const Courses = ({ data }: CoursesProps) => {
  const { t, i18n } = useTranslation();

  return (
    <S.Container>
      {data.map((course) => (
        <S.Course key={course.institution_name + course.start_date}>
          <S.CourseContent>
            <S.Title>{course.institution_name}</S.Title>
            <S.Subtitle>{course.course_title}</S.Subtitle>
            <S.Date aria-label={t('period')}>
              {formatDate(course.start_date, 'MMM/yyyy', i18n.language)}
              {course.end_date &&
                ` - ${formatDate(course.end_date, 'MMM/yyyy', i18n.language)}`}
            </S.Date>
          </S.CourseContent>
        </S.Course>
      ))}
    </S.Container>
  );
};

export default Courses;
