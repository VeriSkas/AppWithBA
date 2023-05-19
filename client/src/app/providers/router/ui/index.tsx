import { FC } from 'react';
import { useRoutes } from 'react-router-dom';

import { PrivateRoutes, PublishRoutes } from '../config';

export const Routing: FC<{}> = () => {
  const isLoggedIn = !!localStorage.getItem('token');

  return useRoutes(isLoggedIn ? PrivateRoutes : PublishRoutes);
};
