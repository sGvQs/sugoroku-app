import React from 'react';
import { StyledBody } from './styled';
import { EntryView } from '../../components/EntryView';

export const Entry = () => {
  const [configStatus, setConfigStatus] = React.useState<number>(0);

  return (
    <StyledBody>
      <EntryView
        configStatus={configStatus}
        setConfigStatus={setConfigStatus}
      />
    </StyledBody>
  );
};
