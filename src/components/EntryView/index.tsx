import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../common/Button';
import { Input } from '../common/Input';
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

type EntryViewProps = {
  mainName: string | undefined;
  subName: string | undefined;
  configStatus: number;
  setConfigStatus: React.Dispatch<React.SetStateAction<number>>;
  setMainName: React.Dispatch<React.SetStateAction<string | undefined>>;
  setSubName: React.Dispatch<React.SetStateAction<string | undefined>>;
};

export const EntryView: React.FC<EntryViewProps> = ({
  mainName,
  subName,
  configStatus,
  setConfigStatus,
  setMainName,
  setSubName,
}) => {
  const { mainPlayerName, setMainPlayerName, subPlayerName, setSubPlayerName } =
    useSugorokuState();

  const sendMainPlayerName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMainName(e.currentTarget.value);
  };
  const sendSubPlayerName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSubName(e.currentTarget.value);
  };

  const initNames = () => {
    setConfigStatus(0);
    setMainPlayerName(undefined);
    setSubPlayerName(undefined);
  };

  return (
    <StyledContentWrap>
      {configStatus === 0 && (
        <StyledContents>
          <StyledTitleArea>
            <p>PLAYER1</p>
            <Lottie path={LottiePath.BLACK_RUN} />
          </StyledTitleArea>
          <StyledInputArea>
            <Input
              onChange={(e) => sendMainPlayerName(e)}
              placeholder={'なまえは？？'}
            />
            <Button
              label={'けってい'}
              onClickHandler={() => {
                setMainPlayerName(mainName);
                setConfigStatus((c) => c + 1);
              }}
              disabled={!!!mainName}
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
            <p>PLAYER2</p>
            <Lottie path={LottiePath.ASTRONAUT_RUN} />
          </StyledTitleArea>
          <StyledInputArea>
            <Input
              onChange={(e) => sendSubPlayerName(e)}
              placeholder={'なまえは？？'}
            />
            <Button
              label={'けってい'}
              onClickHandler={() => {
                setSubPlayerName(subName);
                setConfigStatus((c) => c + 1);
              }}
              disabled={!!!subName}
            />
          </StyledInputArea>
        </StyledContents>
      )}
      {configStatus === 3 && (
        <StyledContents>
          <StyledFinalContents>
            <StyledFinalSideContent>
              <StyledParagraph>PLAYER1: {mainPlayerName}</StyledParagraph>
              <Lottie path={LottiePath.BLACK_RUN} size={'small'} />
            </StyledFinalSideContent>
            <StyledFinalSideContent>
              <StyledParagraph>PLAYER2: {subPlayerName}</StyledParagraph>
              <Lottie path={LottiePath.ASTRONAUT_RUN} size={'small'} />
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
