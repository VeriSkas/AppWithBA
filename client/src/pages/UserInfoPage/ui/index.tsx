import React, { FC } from 'react';
import { useParams } from 'react-router-dom';

import { UserInfo } from '../../../entities/UserInfo';
import { useGetUserByIdQuery } from '../../../shared/api/endpoints/user/userEndpoints';
import classes from './styles.module.scss';

const UserInfoPage: FC<{}> = () => {
  const { id } = useParams();
  const { data } = useGetUserByIdQuery(id);

  return (
    <div className={classes.UserInfoPage}>
      <UserInfo />
    </div>
  );
};

export default UserInfoPage;
