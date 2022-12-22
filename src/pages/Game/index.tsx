import { Link } from 'react-router-dom';
import { Button } from '../../components/common/Button';
import { OptionSelection } from '../../components/game/OptionSelection';
import { StyledBody, StyledContentWrap } from './styled';

export const Game = () => {
  return (
    <StyledBody>
      <StyledContentWrap>
        <OptionSelection />
        <Link to={`/`}>
          <Button label={'タイトルに戻る'} />
        </Link>
      </StyledContentWrap>
    </StyledBody>
  );
};
