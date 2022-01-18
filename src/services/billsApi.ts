import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TBill } from '../app/types/billTypes';
import { baseUrl } from '../routes/routes';

export const billsApi = createApi({
  reducerPath: 'billsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getBills: builder.query<TBill[], any>({
      query: ({ userId, currency }) => ({
        url: 'bills',
        params: { userId, currency }
      })
    })
  })
});

export const { useGetBillsQuery } = billsApi;
