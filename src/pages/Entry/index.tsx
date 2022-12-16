import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/common/Button';
import { Input } from '../../components/common/Input';
import { LottiePath } from '../../components/types';

import lottie from 'lottie-web';

import {
  StyledBody,
  StyledContentWrap,
  StyledContents,
  StyledInputArea,
} from './styled';

import { useSugorokuState } from '../../contexts';
import { Lottie } from '../../components/common/Lottie';

export const Entry = () => {
  const { mainPlayerName, setMainPlayerName, subPlayerName, setSubPlayerName } =
    useSugorokuState();
  const [mainName, setMainName] = React.useState<string>();
  const [subName, setSubName] = React.useState<string>();
  const [configStatus, setConfigStatus] = React.useState<number>(0);

  const sendMainPlayerName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMainName(e.currentTarget.value);
  };
  const sendSubPlayerName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSubName(e.currentTarget.value);
  };

  lottie.loadAnimation({
    container: document.getElementById('walking-man') as Element, // アニメーションを追加する要素
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '/walking-man.json',
  });

  return (
    <StyledBody>
      <StyledContentWrap>
        {configStatus === 0 && (
          <StyledContents>
            <Lottie path={LottiePath.BLACK_RUN} />
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
            <Lottie path={LottiePath.ASTRONAUT_RUN} />
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
          </StyledContents>
        )}
        {configStatus === 3 && (
          <StyledContents>
            <h2>PLAYER1: {mainPlayerName}</h2>
            <Lottie path={LottiePath.BLACK_RUN} />
            <h2>PLAYER2: {subPlayerName}</h2>
            <Lottie path={LottiePath.ASTRONAUT_RUN} />
            <Link to={`/GameStart`}>
              <Button label={'はじめる'} />
            </Link>
          </StyledContents>
        )}
      </StyledContentWrap>
    </StyledBody>
  );
};
