import React, { FC } from 'react';
import classes from './Spinner.module.scss';

export const Spinner: FC<{}> = () => {
  return (
    <div className={classes.Container}>
      <div className={classes.Spinner}>
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  );
};
