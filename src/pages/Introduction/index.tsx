import { Link } from 'react-router-dom';
import { Button } from '../../components/common/Button';
import { Lottie } from '../../components/Lottie';
import { StyledBody, StyledContentWrap, StyledContents } from './styled';
import { LottiePath } from '../../components/types';

export const Introduction = () => {
  return (
    <StyledBody>
      <StyledContentWrap>
        <StyledContents>
          <Lottie path={LottiePath.INTRODUCTION_CITY} size={'large'} />
          <h3>心理すごろくゲーム</h3>
          <Link to={'/CharacterSelection'}>
            <Button label={'はじめる'} />
          </Link>
        </StyledContents>
      </StyledContentWrap>
    </StyledBody>
  );
};
