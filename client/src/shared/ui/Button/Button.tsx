import React, { FC } from 'react';

import { ButtonProps } from './interface';
import classes from './Button.module.scss';

export const Button: FC<ButtonProps> = ({
  children,
  onClick,
  testId,
  type,
  color,
  disabled,
  tooltip,
}) => {
  return (
    <button
      className={`${classes.Button} ${classes[type ?? 'contained']} ${classes[color ?? 'primary']}`}
      onClick={onClick}
      title={tooltip ?? ''}
      type="submit"
      disabled={disabled}
      data-testid={testId}
    >
      {children}
    </button>
  );
};
