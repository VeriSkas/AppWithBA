import React from 'react';
import { Navigate } from 'react-router-dom';

import { PATH } from '../../../../shared/config/constants/paths';
import { Spinner } from '../../../../shared/ui/Spinner';

const StartPage = React.lazy(async () => await import('../../../../pages/StartPage'));
const MainPage = React.lazy(async () => await import('../../../../pages/MainPage'));
const LoginPage = React.lazy(async () => await import('../../../../pages/LoginPage'));
const SignUpPage = React.lazy(async () => await import('../../../../pages/SignUpPage'));
const UserInfoPage = React.lazy(async () => await import('../../../../pages/UserInfoPage'));

export const PrivateRoutes = [
  {
    path: PATH.home,
    element: <React.Suspense fallback={<Spinner />}>{<StartPage />}</React.Suspense>,
    children: [
      {
        path: PATH.home,
        element: <React.Suspense fallback={<Spinner />}>{<MainPage />}</React.Suspense>,
        children: [
          {
            path: `${PATH.userInfo}/${PATH.userInfoParam}`,
            element: <React.Suspense fallback={<Spinner />}>{<UserInfoPage />}</React.Suspense>,
          },
        ],
      },
    ],
  },
  { path: '*', element: <Navigate to={PATH.home} replace /> },
];

export const PublishRoutes = [
  {
    path: PATH.login,
    element: <React.Suspense fallback={<Spinner />}>{<StartPage />}</React.Suspense>,
    children: [
      {
        path: PATH.login,
        element: <React.Suspense fallback={<Spinner />}>{<LoginPage />}</React.Suspense>,
      },
    ],
  },
  {
    path: PATH.signUp,
    element: <React.Suspense fallback={<Spinner />}>{<StartPage />}</React.Suspense>,
    children: [
      {
        path: PATH.signUp,
        element: <React.Suspense fallback={<Spinner />}>{<SignUpPage />}</React.Suspense>,
      },
    ],
  },
  { path: '*', element: <Navigate to={PATH.login} replace /> },
];
