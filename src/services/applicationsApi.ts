import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TApplication } from '../app/types';
import { baseUrl } from '../routes/routes';

export const applicationsApi = createApi({
  reducerPath: 'applicationsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ['Applications'],
  endpoints: (builder) => ({
    getAllApplications: builder.query<TApplication[], void>({
      query: () => 'applications',
      providesTags: (result) => (
        result
          ? [
            ...result.map(({ id }) => ({ type: 'Applications' as const, id })),
            { type: 'Applications', id: 'LIST' }
          ]
          : [{ type: 'Applications', id: 'LIST' }]
      )
    }),
    getApplicationById: builder.query({
      query: (id) => ({
        url: 'applications',
        params: { id }
      }),
      transformResponse: (response: TApplication[]):TApplication => {
        const [application] = response;
        return application;
      }
    }),
    getApplicationsByUserId: builder.query<TApplication[], number>({
      query: (userId) => ({
        url: 'applications',
        params: { userId }
      }),
      providesTags: (result) => (
        result
          ? [
            ...result.map(({ id }) => ({ type: 'Applications' as const, id })),
            { type: 'Applications', id: 'LIST' }
          ]
          : [{ type: 'Applications', id: 'LIST' }]
      )
    }),
    newApplication: builder.mutation({
      query: (application) => ({
        url: 'applications',
        method: 'POST',
        body: application
      }),
      invalidatesTags: [{ type: 'Applications', id: 'LIST' }]
    }),
    updateApplication: builder.mutation({
      query: (application) => ({
        url: `applications/${application.id}`,
        method: 'PUT',
        body: application
      }),
      invalidatesTags: [{ type: 'Applications', id: 'LIST' }]
    })
  })
});

export const {
  useGetAllApplicationsQuery,
  useGetApplicationsByUserIdQuery,
  useGetApplicationByIdQuery,
  useNewApplicationMutation,
  useUpdateApplicationMutation
} = applicationsApi;
