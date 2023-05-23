import { Middleware, PayloadAction, createSlice } from '@reduxjs/toolkit';

import { UserState } from './types';
import { IAuthResponse } from '../../../api/endpoints';

const initialState: UserState = {
  user: null,
  isAuth: false,
  token: localStorage.getItem('token') ?? null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(_, action: PayloadAction<IAuthResponse>) {
      return {
        user: action.payload.user,
        isAuth: !!action.payload.accessToken,
        token: action.payload.accessToken,
      };
    },
    clearUser: () => {
      return { ...initialState, token: null };
    },
    updateToken: (state, action) => {
      return { ...state, token: action.payload.accessToken };
    },
  },
});

export const userMiddleware: Middleware = () => (next) => (action) => {
  if (action.type === 'user/setUser') {
    localStorage.setItem('token', action.payload.accessToken);
    localStorage.setItem('userId', action.payload.user.id);
  }

  if (action.type === 'user/clearUser') {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
  }

  if (action.type === 'user/updateToken') {
    localStorage.setItem('token', action.payload.refreshToken);
  }

  return next(action);
};

export const { setUser, clearUser, updateToken } = userSlice.actions;

export default userSlice.reducer;
