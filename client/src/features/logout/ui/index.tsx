import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

import { PATH } from '../../../shared/config/constants/paths';
import { useMyDispatch } from '../../../shared/lib/utils/storeHooks';
import { clearUser } from '../../../shared/model/slices/userSlice/userSlice';

export const LogoutBtn: FC<{}> = () => {
  const { t } = useTranslation();
  const dispatch = useMyDispatch();

  const logoutHandler = (): void => {
    dispatch(clearUser());
  };

  return (
    <NavLink to={PATH.login} title={t('Tooltip.logout') ?? ''} onClick={logoutHandler}>
      &#11185;
    </NavLink>
  );
};
