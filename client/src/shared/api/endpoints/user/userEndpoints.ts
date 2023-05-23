import { apiConfig } from '../../apiConfig';

const extendedApiSlice = apiConfig.injectEndpoints({
  endpoints: (builder) => ({
    getUserById: builder.query({
      query: (userId) => `/users/${userId}`,
    }),
  }),
});

export const { useGetUserByIdQuery } = extendedApiSlice;
