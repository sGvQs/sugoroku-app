import React from 'react';
import { LottiePath } from '../components/types';

type SugorokuValueType = {
  mainPlayer: LottiePath | undefined;
  mainPlayerStatus: number;
  subPlayer: LottiePath | undefined;
  subPlayerStatus: number;
  setSubPlayer: React.Dispatch<React.SetStateAction<LottiePath | undefined>>;
  setMainPlayer: React.Dispatch<React.SetStateAction<LottiePath | undefined>>;
  setMainPlayerStatus: React.Dispatch<React.SetStateAction<number>>;
  setSubPlayerStatus: React.Dispatch<React.SetStateAction<number>>;
};

type Children = {
  children?: React.ReactNode;
};

const SugorokuContext = React.createContext<SugorokuValueType | null>(null);

export const useSugorokuState = (): SugorokuValueType => {
  const context = React.useContext(SugorokuContext);

  if (!context) {
    throw new Error(
      'useSugorokuState must be used within SugorokuStateProvider'
    );
  }

  return context;
};

export const SugorokuStateProvider: React.FC<Children> = ({ children }) => {
  const [mainPlayer, setMainPlayer] = React.useState<LottiePath>();
  const [mainPlayerStatus, setMainPlayerStatus] = React.useState<number>(0);
  const [subPlayer, setSubPlayer] = React.useState<LottiePath>();
  const [subPlayerStatus, setSubPlayerStatus] = React.useState<number>(0);

  const providerValue = {
    mainPlayer,
    mainPlayerStatus,
    subPlayer,
    subPlayerStatus,
    setMainPlayer,
    setMainPlayerStatus,
    setSubPlayer,
    setSubPlayerStatus,
  };

  return (
    <SugorokuContext.Provider value={providerValue}>
      {children}
    </SugorokuContext.Provider>
  );
};
