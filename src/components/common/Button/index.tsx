import { StyledButton } from './styled';
import React from 'react';

type ButtonProps = {
  label: string;
  disabled?: boolean;
  onClickHandler?: (event: any) => void;
};

export const Button: React.FC<ButtonProps> = ({
  label,
  disabled,
  onClickHandler,
}) => {
  return (
    <StyledButton disabled={disabled} onClick={onClickHandler}>
      {label}
    </StyledButton>
  );
};
