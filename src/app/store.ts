import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import authReducer from '../pages/authPage/authSlice';
import { authApi } from '../services/authApi';

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    auth: authReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
