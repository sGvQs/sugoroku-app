import { StyledInput } from './styled';
import React, { ChangeEvent } from 'react';

type InputProps = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
};

export const Input: React.FC<InputProps> = ({ onChange, placeholder }) => {
  return (
    <StyledInput onChange={(e) => onChange(e)} placeholder={placeholder} />
  );
};
