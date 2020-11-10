import React from 'react';
import cn from 'classnames';

import s from './Button.module.scss';

interface ButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  yellow?: boolean;
  fullWidth?: boolean;
  small?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, yellow, fullWidth, small }) => {
  return (
    <button
      type="button"
      className={cn(s.root, { [s.yellow]: yellow }, { [s.fullWidth]: fullWidth }, { [s.small]: small })}
      onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
