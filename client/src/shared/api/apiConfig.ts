import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { RootState } from '../../app/store/store';

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:2300/',
  credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).user.token;

    if (token) headers.set('Authorization', `Bearer ${token}`);
    return headers;
  },
});

export const apiConfig = createApi({
  reducerPath: 'api',
  baseQuery,
  tagTypes: ['User'],
  endpoints: () => ({}),
})
