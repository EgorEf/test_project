import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TBill, TBillRequest } from '../app/types/billTypes';
import { routes } from '../routes';

export const billsApi = createApi({
  reducerPath: 'billsApi',
  baseQuery: fetchBaseQuery({ baseUrl: routes.BASE_URL }),
  endpoints: (builder) => ({
    getBills: builder.query<TBill[], TBillRequest>({
      query: ({ userId, currency }) => ({
        url: 'bills',
        params: { userId, currency }
      })
    })
  })
});

export const { useGetBillsQuery } = billsApi;
