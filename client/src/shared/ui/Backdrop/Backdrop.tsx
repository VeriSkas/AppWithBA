import React, { FC } from 'react';

import { BackdropProps } from './interface';
import classes from './Backdrop.module.scss';

export const Backdrop: FC<BackdropProps> = ({ onClick }) => {
  return <div className={classes.Backdrop} onClick={onClick}></div>;
};
