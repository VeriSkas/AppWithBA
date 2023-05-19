import { configureStore } from '@reduxjs/toolkit';

import userReducer, { userMiddleware } from '../../shared/model/slices/userSlice/userSlice';
import { apiConfig } from '../../shared/api/apiConfig';

export const store = configureStore({
  reducer: {
    user: userReducer,
    [apiConfig.reducerPath]: apiConfig.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false })
      .concat(userMiddleware)
      .concat(apiConfig.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
