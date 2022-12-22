import React from 'react';
import { LottiePath } from '../types';

type OptionsType = {
  option1: number | null;
  option2: number | null;
  option3: number | null;
  option4: number | null;
  option5: number | null;
};

type SugorokuValueType = {
  mainPlayer: LottiePath | undefined;
  mainPlayerStatus: number;
  subPlayer: LottiePath | undefined;
  subPlayerStatus: number;
  mainPlayerOptions: OptionsType | undefined;
  subPlayerOptions: OptionsType | undefined;
  setSubPlayer: React.Dispatch<React.SetStateAction<LottiePath | undefined>>;
  setMainPlayer: React.Dispatch<React.SetStateAction<LottiePath | undefined>>;
  setMainPlayerStatus: React.Dispatch<React.SetStateAction<number>>;
  setSubPlayerStatus: React.Dispatch<React.SetStateAction<number>>;
  setMainPlayerOptions: React.Dispatch<
    React.SetStateAction<OptionsType | undefined>
  >;
  setSubPlayerOptions: React.Dispatch<
    React.SetStateAction<OptionsType | undefined>
  >;
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
  const [subPlayer, setSubPlayer] = React.useState<LottiePath>();
  const [mainPlayerStatus, setMainPlayerStatus] = React.useState<number>(0);
  const [subPlayerStatus, setSubPlayerStatus] = React.useState<number>(0);
  const [mainPlayerOptions, setMainPlayerOptions] =
    React.useState<OptionsType>();
  const [subPlayerOptions, setSubPlayerOptions] = React.useState<OptionsType>();

  const providerValue = {
    mainPlayer,
    mainPlayerStatus,
    subPlayer,
    subPlayerStatus,
    mainPlayerOptions,
    subPlayerOptions,
    setMainPlayer,
    setMainPlayerStatus,
    setSubPlayer,
    setSubPlayerStatus,
    setMainPlayerOptions,
    setSubPlayerOptions,
  };

  return (
    <SugorokuContext.Provider value={providerValue}>
      {children}
    </SugorokuContext.Provider>
  );
};
