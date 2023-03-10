import styled, { css } from 'styled-components';

type ButtonSize = 'small' | 'medium' | 'large';

export type ButtonSizeProps = {
  size?: ButtonSize;
};

const buttonSizeChanger = (size?: ButtonSize) => {
  switch (size) {
    case 'small':
      return css`
        font-size: 5px;
      `;
    case 'medium':
      return css`
        font-size: 10px;
      `;
    case 'large':
      return css`
        font-size: 16px;
      `;
    default:
      return css`
        font-size: 14px;
      `;
  }
};

export const StyledButton = styled.button<ButtonSizeProps>`
  ${({ size }) => {
    return buttonSizeChanger(size);
  }}
  color: #fff;
  border-radius: 5px;
  padding: 0.7em 2.5em;
  font-family: 'Lato', sans-serif;
  font-weight: 500;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
    7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  outline: none;
  border: none;
  color: #000;
  font-weight: bold;

  :disabled {
    opacity: 0.1;
  }

  :after {
    position: absolute;
    content: '';
    width: 0;
    height: 100%;
    top: 0;
    left: 0;
    direction: rtl;
    z-index: -1;
    box-shadow: -7px -7px 20px 0px #fff9, -4px -4px 5px 0px #fff9,
      7px 7px 20px 0px #0002, 4px 4px 5px 0px #0001;
    transition: all 0.3s ease;
  }
  :hover {
    color: #000;
  }
  :hover:after {
    left: auto;
    right: 0;
    width: 100%;
  }
  :active {
    top: 2px;
  }
`;
