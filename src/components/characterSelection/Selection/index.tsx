import React from 'react';
import { CharacterDiscriptions } from '../CharacterDiscription';
import { Button } from '../../common/Button';
import { Lottie } from '../../Lottie';
import { LottiePath } from '../../types';
import {
  StyledCharacterSelectionWarp,
  StyledCharactorDiv,
  StyledSlickButtonWrap,
} from './styled';

type SelectionProps = {
  currentCharacterNumber: number;
  setCurrentCharacterNumber: React.Dispatch<React.SetStateAction<number>>;
};

export const Selection: React.FC<SelectionProps> = ({
  currentCharacterNumber,
  setCurrentCharacterNumber,
}) => {
  return (
    <StyledCharacterSelectionWarp>
      {currentCharacterNumber === 0 && (
        <StyledCharactorDiv>
          <Lottie path={LottiePath.ANGRY_RUN} />
          <CharacterDiscriptions path={LottiePath.ANGRY_RUN} final={false} />
        </StyledCharactorDiv>
      )}
      {currentCharacterNumber === 1 && (
        <StyledCharactorDiv>
          <Lottie path={LottiePath.THIN_RUN} />
          <CharacterDiscriptions path={LottiePath.THIN_RUN} final={false} />
        </StyledCharactorDiv>
      )}
      {currentCharacterNumber === 2 && (
        <StyledCharactorDiv>
          <Lottie path={LottiePath.ASTRONAUT_RUN} />
          <CharacterDiscriptions
            path={LottiePath.ASTRONAUT_RUN}
            final={false}
          />
        </StyledCharactorDiv>
      )}
      {currentCharacterNumber === 3 && (
        <StyledCharactorDiv>
          <Lottie path={LottiePath.BLACK_RUN} />
          <CharacterDiscriptions path={LottiePath.BLACK_RUN} final={false} />
        </StyledCharactorDiv>
      )}
      {currentCharacterNumber === 4 && (
        <StyledCharactorDiv>
          <Lottie path={LottiePath.SMILY_RUN} />
          <CharacterDiscriptions path={LottiePath.SMILY_RUN} final={false} />
        </StyledCharactorDiv>
      )}
      <StyledSlickButtonWrap>
        <Button
          label={'前へ'}
          size={'small'}
          disabled={currentCharacterNumber === 0}
          onClickHandler={() => setCurrentCharacterNumber((c) => c - 1)}
        />
        <Button
          label={'次へ'}
          size={'small'}
          disabled={currentCharacterNumber === 4}
          onClickHandler={() => setCurrentCharacterNumber((c) => c + 1)}
        />
      </StyledSlickButtonWrap>
    </StyledCharacterSelectionWarp>
  );
};
