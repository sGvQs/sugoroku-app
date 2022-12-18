import React from 'react';
import { Button } from '../common/Button';
import { Lottie } from '../Lottie';
import { LottiePath } from '../types';
import {
  StyledCharacterSelectionWarp,
  StyledCharactorDiv,
  StyledSlickButtonWrap,
} from './styled';

type ChracterSelectionProps = {
  currentCharacterNumber: number;
  setCurrentCharacterNumber: React.Dispatch<React.SetStateAction<number>>;
};

export const ChracterSelection: React.FC<ChracterSelectionProps> = ({
  currentCharacterNumber,
  setCurrentCharacterNumber,
}) => {
  return (
    <StyledCharacterSelectionWarp>
      {currentCharacterNumber === 0 && (
        <StyledCharactorDiv>
          <Lottie path={LottiePath.ANGRY_RUN} />
          <h3>怒ったおじさん</h3>
          <li>持っているカードは弱い</li>
          <li>すでに５マス進んでいる</li>
        </StyledCharactorDiv>
      )}
      {currentCharacterNumber === 1 && (
        <StyledCharactorDiv>
          <Lottie path={LottiePath.THIN_RUN} />
          <h3>怒ったおじさん</h3>
          <li>持っているカードは弱い</li>
          <li>すでに５マス進んでいる</li>
        </StyledCharactorDiv>
      )}
      {currentCharacterNumber === 2 && (
        <StyledCharactorDiv>
          <Lottie path={LottiePath.ASTRONAUT_RUN} />
          <h3>怒ったおじさん</h3>
          <li>持っているカードは弱い</li>
          <li>すでに５マス進んでいる</li>
        </StyledCharactorDiv>
      )}
      {currentCharacterNumber === 3 && (
        <StyledCharactorDiv>
          <Lottie path={LottiePath.BLACK_RUN} />
          <h3>怒ったおじさん</h3>
          <li>持っているカードは弱い</li>
          <li>すでに５マス進んでいる</li>
        </StyledCharactorDiv>
      )}
      {currentCharacterNumber === 4 && (
        <StyledCharactorDiv>
          <Lottie path={LottiePath.SMILY_RUN} />
          <h3>怒ったおじさん</h3>
          <li>持っているカードは弱い</li>
          <li>すでに５マス進んでいる</li>
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
