import { StyledButton, ButtonSizeProps } from './styled';
import React from 'react';

type ButtonProps = {
  label: string;
  disabled?: boolean;
  onClickHandler?: React.MouseEventHandler<HTMLButtonElement>;
} & ButtonSizeProps;

export const Button: React.FC<ButtonProps> = ({
  label,
  disabled,
  onClickHandler,
  ...rest
}) => {
  return (
    <StyledButton disabled={disabled} onClick={onClickHandler} {...rest}>
      {label}
    </StyledButton>
  );
};
