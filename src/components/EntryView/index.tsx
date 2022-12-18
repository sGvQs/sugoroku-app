import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../common/Button';
import { LottiePath } from '../types';
import { useSugorokuState } from '../../contexts';
import { Lottie } from '../Lottie';

import {
  StyledContentWrap,
  StyledContents,
  StyledFinalContents,
  StyledFinalSideContent,
  StyledFinalButtonWrap,
  StyledInputArea,
  StyledTitleArea,
  StyledParagraph,
} from './styled';
import { ChracterSelection } from '../CharacterSelection';

type EntryViewProps = {
  configStatus: number;
  setConfigStatus: React.Dispatch<React.SetStateAction<number>>;
};

export const EntryView: React.FC<EntryViewProps> = ({
  configStatus,
  setConfigStatus,
}) => {
  const { mainPlayer, setMainPlayer, subPlayer, setSubPlayer } =
    useSugorokuState();

  const [currentMainCharacterNumber, setCurrentMainCharacterNumber] =
    React.useState<number>(0);
  const [currentSubCharacterNumber, setCurrentSubCharacterNumber] =
    React.useState<number>(0);

  enum CharacterSetType {
    MAIN = 'main',
    SUB = 'sub',
  }

  const setCharactor = (currentCharacter: number, type: CharacterSetType) => {
    if (type === CharacterSetType.MAIN) {
      setMainPlayer(CharactorFinder(currentCharacter));
    } else if (type === CharacterSetType.SUB) {
      setSubPlayer(CharactorFinder(currentCharacter));
    } else {
      return;
    }
  };

  const CharactorFinder = (currentCharactor: number) => {
    switch (currentCharactor) {
      case 0:
        return LottiePath.ANGRY_RUN;
      case 1:
        return LottiePath.THIN_RUN;
      case 2:
        return LottiePath.ASTRONAUT_RUN;
      case 3:
        return LottiePath.BLACK_RUN;
      case 4:
        return LottiePath.SMILY_RUN;
      default:
        return;
    }
  };

  const initNames = () => {
    setConfigStatus(0);
  };

  return (
    <StyledContentWrap>
      {configStatus === 0 && (
        <StyledContents>
          <StyledTitleArea>
            <ChracterSelection
              currentCharacterNumber={currentMainCharacterNumber}
              setCurrentCharacterNumber={setCurrentMainCharacterNumber}
            />
          </StyledTitleArea>
          <StyledInputArea>
            <Button
              label={'けってい'}
              onClickHandler={() => {
                setConfigStatus((c) => c + 1);
                setCharactor(currentMainCharacterNumber, CharacterSetType.MAIN);
              }}
            />
          </StyledInputArea>
        </StyledContents>
      )}
      {configStatus === 1 && (
        <StyledContents>
          <h1>となりのひとですか？</h1>
          <Button
            label={'はい'}
            onClickHandler={() => setConfigStatus((c) => c + 1)}
          />
        </StyledContents>
      )}
      {configStatus === 2 && (
        <StyledContents>
          <StyledTitleArea>
            <ChracterSelection
              currentCharacterNumber={currentSubCharacterNumber}
              setCurrentCharacterNumber={setCurrentSubCharacterNumber}
            />
          </StyledTitleArea>
          <StyledInputArea>
            <Button
              label={'けってい'}
              onClickHandler={() => {
                setConfigStatus((c) => c + 1);
                setCharactor(currentSubCharacterNumber, CharacterSetType.SUB);
              }}
            />
          </StyledInputArea>
        </StyledContents>
      )}
      {configStatus === 3 && (
        <StyledContents>
          <StyledFinalContents>
            <StyledFinalSideContent>
              <StyledParagraph>PLAYER1</StyledParagraph>
              {mainPlayer && <Lottie path={mainPlayer} size={'small'} />}
            </StyledFinalSideContent>
            <StyledFinalSideContent>
              <StyledParagraph>PLAYER2</StyledParagraph>
              {subPlayer && <Lottie path={subPlayer} size={'small'} />}
            </StyledFinalSideContent>
          </StyledFinalContents>
          <StyledFinalButtonWrap>
            <Link to={`/GameStart`}>
              <Button label={'はじめる'} />
            </Link>
            <Button
              label={'決めなおす'}
              size={'small'}
              onClickHandler={initNames}
            />
          </StyledFinalButtonWrap>
        </StyledContents>
      )}
    </StyledContentWrap>
  );
};
