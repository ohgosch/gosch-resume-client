import * as S from './styles';

const Navbar = () => {
  return (
    <S.Container>
      <S.MenuItem href="#cover-letter">Cover Letter</S.MenuItem>
      <S.MenuItem href="#">Skills</S.MenuItem>
      <S.MenuItem href="#">Experiences</S.MenuItem>
      <S.MenuItem href="#">Courses</S.MenuItem>
    </S.Container>
  );
};

export default Navbar;
