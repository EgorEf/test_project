import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { ResponseData } from '../app/types';

const baseUrl = (process.env.NODE_ENV === 'development')
  ? 'http://localhost:3001/'
  : 'https://my-json-server.typicode.com/EgorEf/fake-server/';

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
