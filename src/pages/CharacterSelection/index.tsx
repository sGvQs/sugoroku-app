import React from 'react';
import { StyledBody } from './styled';
import { CharacterSelectionView } from '../../components/characterSelection/CharacterSelectionView';

export const CharacterSelection = () => {
  const [configStatus, setConfigStatus] = React.useState<number>(0);

  return (
    <StyledBody>
      <CharacterSelectionView
        configStatus={configStatus}
        setConfigStatus={setConfigStatus}
      />
    </StyledBody>
  );
};
