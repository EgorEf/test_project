import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { CurriedGetDefaultMiddleware } from '@reduxjs/toolkit/dist/getDefaultMiddleware';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from '../pages/Auth/authSlice';
import productsReducer from '../pages/DepositCalculator/productsSlice';
import { authApi } from '../services/authApi';
import { billsApi } from '../services/billsApi';
import { productsApi } from '../services/productsApi';
import { applicationsApi } from '../services/applicationsApi';

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  blacklist: [
    authApi.reducerPath,
    productsApi.reducerPath,
    billsApi.reducerPath,
    applicationsApi.reducerPath,
    'products'
  ]
};

const rootReducer = combineReducers({
  auth: authReducer,
  products: productsReducer,
  [authApi.reducerPath]: authApi.reducer,
  [productsApi.reducerPath]: productsApi.reducer,
  [billsApi.reducerPath]: billsApi.reducer,
  [applicationsApi.reducerPath]: applicationsApi.reducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middlewareHandler = (getDefaultMiddleware: CurriedGetDefaultMiddleware) => {
  const middlewareList = [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    }),
    authApi.middleware,
    productsApi.middleware,
    billsApi.middleware,
    applicationsApi.middleware
  ];
  return middlewareList;
};

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => middlewareHandler(getDefaultMiddleware)
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
