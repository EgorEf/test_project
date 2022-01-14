import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TApplication } from '../app/types';
import { baseUrl } from '../routes/routes';

export const applicationsApi = createApi({
  reducerPath: 'applicationsApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getAllApplications: builder.query<TApplication[], void>({
      query: () => 'applications'
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
    getApplicationsByUserId: builder.query({
      query: (userId) => ({
        url: 'applications',
        params: { userId }
      })
    }),
    newApplication: builder.mutation({
      query: (application) => ({
        url: 'applications',
        method: 'POST',
        body: application
      })
    }),
    updateApplication: builder.mutation({
      query: (application) => ({
        url: `applications/${application.id}`,
        method: 'PUT',
        body: application
      })
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
