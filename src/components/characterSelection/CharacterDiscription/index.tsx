import { LottiePath } from '../../types';
import React from 'react';

type CharacterDiscriptionProps = {
  path: LottiePath;
};

export const CharacterDiscriptions: React.FC<CharacterDiscriptionProps> = ({
  path,
}) => {
  switch (path) {
    case LottiePath.ANGRY_RUN:
      return (
        <>
          <h3>ブラウン</h3>
          <li>保守的な動き</li>
          <li>中級者向け</li>
        </>
      );
    case LottiePath.THIN_RUN:
      return (
        <>
          <h3>アンディー</h3>
          <li>平均的なカード</li>
          <li>初心者向け</li>
        </>
      );
    case LottiePath.ASTRONAUT_RUN:
      return (
        <>
          <h3>ジョンソン</h3>
          <li>ピンキリカード</li>
          <li>中級者向け</li>
        </>
      );
    case LottiePath.BLACK_RUN:
      return (
        <>
          <h3>ボブ</h3>
          <li>使いやすいカード</li>
          <li>中級者向け</li>
        </>
      );
    case LottiePath.SMILY_RUN:
      return (
        <>
          <h3>スマイリー</h3>
          <li>トリッキー</li>
          <li>上級者向け</li>
        </>
      );
    default:
      return <></>;
  }
};
