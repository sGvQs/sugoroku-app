import { StyledInput } from './styled';
import React, { ChangeEvent } from 'react';

type InputProps = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const Input: React.FC<InputProps> = ({ onChange }) => {
  return <StyledInput onChange={(e) => onChange(e)} />;
};
