import * as S from './styles';

const Courses = () => {
  return (
    <S.Container>
      <S.Course>
        <S.CourseContent>
          <S.Title>Escolas e Faculdades QI</S.Title>
          <S.Subtitle>Technich course</S.Subtitle>
          <S.Date>ago/2019</S.Date>
        </S.CourseContent>
      </S.Course>
      <S.Course>
        <S.CourseContent>
          <S.Title>Escolas e Faculdades</S.Title>
          <S.Subtitle>Technich course</S.Subtitle>
          <S.Date>ago/2019</S.Date>
        </S.CourseContent>
      </S.Course>
    </S.Container>
  );
};

export default Courses;
