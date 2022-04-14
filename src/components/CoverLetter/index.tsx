import * as S from './styles';

export type CoverLetterProps = {
  data: string;
};

const CoverLetter = ({ data }: CoverLetterProps) => {
  return <S.Container dangerouslySetInnerHTML={{ __html: data }}></S.Container>;
};

export default CoverLetter;
