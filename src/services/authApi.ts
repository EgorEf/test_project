import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TUser } from '../app/types/authTypes';
import { routes } from '../routes';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: routes.BASE_URL }),
  endpoints: (builder) => ({
    login: builder.query({
      query: ({ email, password }) => ({
        url: 'users',
        params: { email, password },
        validateStatus: (response, result) => (response.status === 200 && result.length !== 0)
      }),
      transformResponse: (response: TUser[]) => {
        const [responseData] = response;
        return responseData;
      }
    })
  })
});

export const { useLazyLoginQuery } = authApi;
