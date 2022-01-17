import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TUser } from '../app/types';
import { baseUrl } from '../routes/routes';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    login: builder.query({
      query: ({ email, password }) => ({
        url: 'users',
        params: { email, password },
        validateStatus: (response, result) => (response.status === 200 && result.length !== 0)
      }),
      transformResponse: (response: TUser[]): TUser => {
        const [responseData] = response;
        return responseData;
      }
    })
  })
});

export const { useLazyLoginQuery } = authApi;
