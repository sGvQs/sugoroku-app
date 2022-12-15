import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/common/Button';
import { Input } from '../../components/common/Input';

import { StyledBody, StyledContentWrap } from './styled';

import { useSugorokuState } from '../../contexts';

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

  return (
    <StyledBody>
      <StyledContentWrap>
        {configStatus === 0 && (
          <>
            <h1>あなたのなまえを入れてね</h1>
            <Input onChange={(e) => sendMainPlayerName(e)} />
            {mainName && (
              <Button
                label={'けってい'}
                onClickHandler={() => {
                  setMainPlayerName(mainName);
                  setConfigStatus((c) => c + 1);
                }}
              />
            )}
            <h2>確定を押したらとなりの人に渡してね</h2>
          </>
        )}
        {configStatus === 1 && (
          <>
            <h1>となりのひとですか？</h1>
            <Button
              label={'はい'}
              onClickHandler={() => setConfigStatus((c) => c + 1)}
            />
          </>
        )}
        {configStatus === 2 && (
          <>
            <h1>あなたのなまえを入れてね</h1>
            <Input onChange={(e) => sendSubPlayerName(e)} />
            {subName && (
              <Button
                label={'けってい'}
                onClickHandler={() => {
                  setSubPlayerName(subName);
                  setConfigStatus((c) => c + 1);
                }}
              />
            )}
          </>
        )}
        {configStatus === 3 && (
          <>
            <h2>PLAYER1: {mainPlayerName}</h2>
            <h2>PLAYER2: {subPlayerName}</h2>
            <Link to={`/GameStart`}>
              <Button label={'はじめる'} />
            </Link>
          </>
        )}
      </StyledContentWrap>
    </StyledBody>
  );
};
