import { LottiePath } from '../../../types';
import React from 'react';
import { RatingDifficality } from '../../common/Rating';

type CharacterDiscriptionProps = {
  path: LottiePath;
  final: boolean;
};

export const CharacterDiscriptions: React.FC<CharacterDiscriptionProps> = ({
  path,
  final,
}) => {
  switch (path) {
    case LottiePath.ANGRY_RUN:
      return (
        <>
          <h3>ブラウン</h3>
          <li>保守的な動き</li>
          <RatingDifficality value={4} final={final} />
        </>
      );
    case LottiePath.THIN_RUN:
      return (
        <>
          <h3>アンディー</h3>
          <li>平均的なカード</li>
          <RatingDifficality value={2} final={final} />
        </>
      );
    case LottiePath.ASTRONAUT_RUN:
      return (
        <>
          <h3>ジョンソン</h3>
          <li>ピンキリカード</li>
          <RatingDifficality value={3} final={final} />
        </>
      );
    case LottiePath.BLACK_RUN:
      return (
        <>
          <h3>ボブ</h3>
          <li>使いやすいカード</li>
          <RatingDifficality value={3} final={final} />
        </>
      );
    case LottiePath.SMILY_RUN:
      return (
        <>
          <h3>スマイリー</h3>
          <li>トリッキー</li>
          <RatingDifficality value={5} final={final} />
        </>
      );
    default:
      return <></>;
  }
};
