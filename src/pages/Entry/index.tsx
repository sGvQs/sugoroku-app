import React from 'react';
import { StyledBody } from './styled';
import { EntryView } from '../../components/EntryView';

export const Entry = () => {
  const [mainName, setMainName] = React.useState<string>();
  const [subName, setSubName] = React.useState<string>();
  const [configStatus, setConfigStatus] = React.useState<number>(0);

  return (
    <StyledBody>
      <EntryView
        mainName={mainName}
        subName={subName}
        configStatus={configStatus}
        setConfigStatus={setConfigStatus}
        setMainName={setMainName}
        setSubName={setSubName}
      />
    </StyledBody>
  );
};
