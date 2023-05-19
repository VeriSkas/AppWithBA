import { apiConfig } from '../../apiConfig';
import { IAuthRequest, IAuthResponse } from './types';

const extendedApiSlice = apiConfig.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation<IAuthResponse, IAuthRequest>({
      query: (data) => ({
        url: 'registration',
        method: 'POST',
        body: data,
      }),
    }),

    logIn: builder.mutation<IAuthResponse, IAuthRequest>({
      query: (data) => ({
        url: 'login',
        method: 'POST',
        body: data,
      }),
    }),

    checkAuth: builder.query<IAuthResponse, null>({
      query: () => 'refresh',
    }),
  }),
});

export const { useRegisterMutation, useLogInMutation, useCheckAuthQuery } = extendedApiSlice;
