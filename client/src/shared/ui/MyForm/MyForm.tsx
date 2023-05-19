import React, { FC } from 'react';
import classes from './MyForm.module.scss';

export const MyForm: FC<{ children: React.ReactNode }> = ({ children }) => {
  return <div className={classes.MyForm}>{children}</div>;
};
