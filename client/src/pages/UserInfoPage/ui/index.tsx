import React, { FC } from 'react';

import { UserInfo } from '../../../entities/UserInfo';
import classes from './styles.module.scss';

const UserInfoPage: FC<{}> = () => {
  return (
    <div className={classes.UserInfoPage}>
      <UserInfo />
    </div>
  );
};

export default UserInfoPage;
