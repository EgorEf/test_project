import { createApi, fetchBaseQuery, FetchBaseQueryError } from '@reduxjs/toolkit/query/react';
import { getPreparedDataProducts } from './prepareDataProducts';
import { baseUrl } from '../routes/routes';
import { TProductResponse, TProduct } from '../app/types/productTypes';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      async queryFn(requestParams, queryApi, extraOptions, fetchWithBQ) {
        const {
          currency,
          isEarlyRepayment,
          isPartial,
          isCapitalization
        } = requestParams;

        const response = await fetchWithBQ({
          url: 'products',
          params: {
            currency,
            'options.isEarlyRepayment': isEarlyRepayment,
            'options.isPartial': isPartial,
            'options.isCapitalization': isCapitalization
          }
        });

        if (!response.data) return { error: response.error as FetchBaseQueryError };

        const { data } = response as { data: TProductResponse[] };
        return {
          data: getPreparedDataProducts(data, requestParams)
        } as { data: TProduct[] };
      }
    })
  })
});

export const { useLazyGetProductsQuery } = productsApi;
