import React from 'react';

type SugorokuValueType = {
  mainPlayerName: string | undefined;
  mainPlayerStatus: number;
  subPlayerName: string | undefined;
  subPlayerStatus: number;
  setSubPlayerName: React.Dispatch<React.SetStateAction<string | undefined>>;
  setMainPlayerName: React.Dispatch<React.SetStateAction<string | undefined>>;
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
  const [mainPlayerName, setMainPlayerName] = React.useState<string>();
  const [mainPlayerStatus, setMainPlayerStatus] = React.useState<number>(0);
  const [subPlayerName, setSubPlayerName] = React.useState<string>();
  const [subPlayerStatus, setSubPlayerStatus] = React.useState<number>(0);

  const providerValue = {
    mainPlayerName,
    mainPlayerStatus,
    subPlayerName,
    subPlayerStatus,
    setMainPlayerName,
    setMainPlayerStatus,
    setSubPlayerName,
    setSubPlayerStatus,
  };

  return (
    <SugorokuContext.Provider value={providerValue}>
      {children}
    </SugorokuContext.Provider>
  );
};
