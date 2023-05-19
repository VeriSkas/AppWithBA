import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { InputProps } from './interface';
import classes from './Input.module.scss';

export const Input: FC<InputProps> = ({
  label,
  type,
  defaultValue,
  readonly,
  placeholder,
  register,
  error,
}) => {
  const { t } = useTranslation();
  return (
    <div className={classes.Input}>
      {label && <label htmlFor={label}>{t(`InputLabels.${label}`)}</label>}
      <div className={classes.Input_input}>
        <input
          type={type ?? 'text'}
          defaultValue={defaultValue ?? ''}
          id={label}
          readOnly={readonly ?? false}
          placeholder={placeholder ?? ''}
          {...register}
        />
        {error && <span>{t(`InputErrorMessages.${error}`)}</span>}
      </div>
    </div>
  );
};
