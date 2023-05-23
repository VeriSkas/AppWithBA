import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { PATH } from '../../../shared/config/constants';
import { Avatar } from '../../../shared/ui';
import { LogoutBtn } from '../../../features';
import { useGetUserByIdQuery } from '../../../shared/api/endpoints';
import classes from './styles.module.scss';

export const UserCard: FC<{ onClose: () => void }> = ({ onClose }) => {
  const userId = localStorage.getItem('userId');
  const { data } = useGetUserByIdQuery(userId);
  const navigate = useNavigate();

  const moveToUserInfoPage = (): void => {
    navigate(`${PATH.userInfo}/${userId ?? ''}`);
    onClose();
  };

  return (
    <div className={classes.UserCard}>
      <div className={classes.UserData} onClick={moveToUserInfoPage}>
        <Avatar src={data?.photo ?? ''} alt={data?.name ?? 'User'} />
        <div className={classes.UserInfoText}>
          <h3>{data?.name ?? 'User'}</h3>
          <h5>{data?.email ?? 'User@mail.ru'}</h5>
        </div>
      </div>
      <div className={classes.Icon}>
        <LogoutBtn />
      </div>
    </div>
  );
};
