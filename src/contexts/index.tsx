import React from 'react';

type SugorokuValueType = {
  mainPlayer: string | undefined;
  mainPlayerStatus: number;
  subPlayer: string | undefined;
  subPlayerStatus: number;
  setSubPlayer: React.Dispatch<React.SetStateAction<string | undefined>>;
  setMainPlayer: React.Dispatch<React.SetStateAction<string | undefined>>;
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
  const [mainPlayer, setMainPlayer] = React.useState<string>();
  const [mainPlayerStatus, setMainPlayerStatus] = React.useState<number>(0);
  const [subPlayer, setSubPlayer] = React.useState<string>();
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
