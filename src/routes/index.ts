import { TRoutes } from '../app/types';

const BASE_URL = (process.env.NODE_ENV === 'development')
  ? 'http://localhost:3001/'
  : 'https://my-json-server.typicode.com/EgorEf/fake-server/';

export const routes: TRoutes = {
  BASE_URL,
  LOGIN: '/login',
  DEPOSIT_CALCULATOR: '/depositCalculator',
  DEPOSIT_APPLICATION: {
    PATH: '/depositApplication',
    NEW: (id: number): string => `/depositApplication/new/${id}`,
    BY_ID: (id: number): string => `/depositApplication/${id}`
  },
  DEPOSIT_LIST: '/depositList'
};
