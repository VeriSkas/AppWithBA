import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { User } from '../config/interface';
import { PATH } from '../../../shared/config/constants/paths';
import { Avatar } from '../../../shared/ui/Avatar';
import { LogoutBtn } from '../../../features/logout';
import classes from './styles.module.scss';

export const UserCard: FC<{ user: User, onClose: () => void }> = ({ user, onClose }) => {
  const navigate = useNavigate();

  const moveToUserInfoPage = (): void => {
    navigate(`${PATH.userInfo}/${user.id}`);
    onClose();
  };

  return (
    <div className={classes.UserCard}>
      <div className={classes.UserData} onClick={moveToUserInfoPage}>
        <Avatar src={user.photo} alt={user.name} />
        <div className={classes.UserInfoText}>
          <h3>{user.name ?? ''}</h3>
          <h5>{user.email ?? ''}</h5>
        </div>
      </div>
      <div className={classes.Icon}>
        <LogoutBtn />
      </div>
    </div>
  );
};
