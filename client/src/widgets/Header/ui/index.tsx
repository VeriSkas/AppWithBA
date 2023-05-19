import React, { FC } from 'react';

import { Logo } from '../../../shared/ui/Logo';
import { ThemeSwitcher } from '../../../features/changeTheme';
import { LocalizeSwitcher } from '../../../features/changeLocale';
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
