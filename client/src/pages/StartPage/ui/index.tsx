import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from '../../../widgets';
import classes from './styles.module.scss';

const StartPage: FC<{}> = () => {
  return (
    <>
      <Header />
      <div className={classes.StartPage}>
        <Outlet />
      </div>
    </>
  );
};

export default StartPage;
