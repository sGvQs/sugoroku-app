import { Link } from 'react-router-dom';
import { Button } from '../../components/common/Button';
import { StyledBody, StyledContentWrap } from './styled';

export const Game = () => {
  return (
    <StyledBody>
      <StyledContentWrap>
        <Link to={`/`}>
          <Button label={'タイトルに戻る'} />
        </Link>
      </StyledContentWrap>
    </StyledBody>
  );
};
