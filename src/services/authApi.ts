import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { ResponseData } from '../app/types';
import { baseUrl } from '../routes/routes';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: ({ email, password }) => ({
        url: 'users',
        params: { email, password },
        validateStatus: (response, result) => (response.status === 200 && result.length !== 0)
      }),
      transformResponse: (response: ResponseData[]):ResponseData => {
        const [responseData] = response;
        return responseData;
      }
    })
  })
});

export const { useLoginMutation } = authApi;
