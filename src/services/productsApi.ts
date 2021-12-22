import { createApi, fetchBaseQuery, FetchBaseQueryMeta } from '@reduxjs/toolkit/query/react';
import type { ProductRequest } from '../app/types';

const baseUrl = (process.env.NODE_ENV === 'development')
  ? 'http://localhost:3001/'
  : 'https://my-json-server.typicode.com/EgorEf/fake-server/';

type ProductResponse = {
  id: 1,
  name: string,
  currency: string,
  period: Array<[number]>,
  periodStep: number,
  initialRate: number,
  isEarlyRepayment: boolean,
  isPartial: boolean,
  isCapitalization: boolean
};

function defaultTransformResponse(
  baseQueryReturnValue: unknown,
  meta: unknown,
  arg: unknown
) {
  return baseQueryReturnValue;
}

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getProducts: builder.mutation({
      query: ({
        currency,
        isEarlyRepayment,
        isPartial,
        isCapitalization
      }) => ({
        url: 'products',
        params: {
          currency,
          isEarlyRepayment,
          isPartial,
          isCapitalization
        },
        validateStatus: (response, result) => (response.status === 200 && result.length !== 0)
      }),
      transformResponse: (products, meta) => {
        console.log({ products, meta }, 'het');
        return products;
      }
    })
  })
});

export const { useGetProductsMutation } = productsApi;
