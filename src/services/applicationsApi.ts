import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TApplication, Statuses } from '../app/types/applicationTypes';
import { routes } from '../routes';

export const applicationsApi = createApi({
  reducerPath: 'applicationsApi',
  baseQuery: fetchBaseQuery({ baseUrl: routes.BASE_URL }),
  tagTypes: ['Applications'],
  endpoints: (builder) => ({
    getApplicationsInProcessing: builder.query<TApplication[], void>({
      query: () => ({ url: 'applications', params: { status: Statuses.IN_PROCESSING } }),
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
      },
      providesTags: (result, error, id) => [{ type: 'Applications', id }]
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
        headers: { 'Content-Type': 'application/json' },
        body: application
      }),
      invalidatesTags: [{ type: 'Applications', id: 'LIST' }]
    }),
    updateApplication: builder.mutation({
      query: (application) => ({
        url: `applications/${application.id}`,
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: application
      }),
      invalidatesTags: ['Applications']
    })
  })
});

export const {
  useGetApplicationsInProcessingQuery,
  useGetApplicationsByUserIdQuery,
  useGetApplicationByIdQuery,
  useNewApplicationMutation,
  useUpdateApplicationMutation
} = applicationsApi;
