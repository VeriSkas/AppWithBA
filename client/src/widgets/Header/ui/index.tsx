import React, { FC } from 'react';

import { Logo } from '../../../shared/ui';
import { ThemeSwitcher, LocalizeSwitcher } from '../../../features';
import classes from './styles.module.scss';

export const Header: FC<{}> = () => {
  return (
    <div className={classes.Header}>
      <Logo />
      <div className={classes.HeaderOptions}>
        <ThemeSwitcher />
        <LocalizeSwitcher />
      </div>
    </div>
  );
};
