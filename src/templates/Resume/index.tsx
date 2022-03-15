import CoverLetter from 'components/CoverLetter';
import Wrapper from 'visual/styles/Wrapper';
import Section from 'components/Section';
import Navbar from 'components/Navbar';

import * as S from './styles';

const ResumeTemplate = () => {
  return (
    <S.Container>
      <Navbar />
      <S.Content>
        <Section name="Cover Letter" id="cover-letter">
          <Wrapper middle>
            <CoverLetter />
          </Wrapper>
        </Section>
      </S.Content>
    </S.Container>
  );
};

export default ResumeTemplate;
