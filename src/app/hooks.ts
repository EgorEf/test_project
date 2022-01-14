import { useRef } from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import uniqueId from 'lodash.uniqueid';
import {
  useGetApplicationByIdQuery,
  useGetAllApplicationsQuery,
  useGetApplicationsByUserIdQuery
} from '../services/applicationsApi';
import { TApplication, Product, User } from './types';
import type { RootState, AppDispatch } from './store';
import { ApplicationDate } from '../helpers/ApplicationDate';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useGetApplication = (
  applicationId: number,
  productId: number,
  currentUser: User | null,
  selectedProduct: Product | null
): TApplication | null | undefined => {
  if (applicationId) {
    const { data: uploadedApplication } = useGetApplicationByIdQuery(applicationId);
    return uploadedApplication;
  }

  if (!currentUser || !selectedProduct) return null;

  const {
    name,
    description,
    currency,
    rate,
    term,
    amount,
    income,
    options
  }: Product = selectedProduct;

  const id = Number(uniqueId());

  const applicationDate = new ApplicationDate(term);

  const applicationTemplate: TApplication = {
    id,
    userId: currentUser.id,
    name,
    description,
    createdAt: applicationDate.getCreatedAtStrInHumanView(),
    closedAt: applicationDate.getClosedAtStrInHumanView(),
    amount,
    billNum: null,
    status: 'draft',
    currency,
    rate,
    income,
    term,
    options
  };

  return applicationTemplate;
};

export const useGetApplications = (
  userRole: string,
  userId: number
): TApplication[] | undefined => {
  if (userRole === 'admin') {
    const { data: allApplications } = useGetAllApplicationsQuery();
    return allApplications;
  }
  const { data: userApplications } = useGetApplicationsByUserIdQuery(userId);
  return userApplications;
};

type MappedObj = {
  [key: string]: TApplication[] | null
};

export const useGetFilteredApplications = (
  tab: string,
  applications: TApplication[] | undefined
): TApplication[] | null => {
  const memoizedStateRef = useRef<MappedObj>({
    all: null,
    draft: null,
    inProcessing: null,
    open: null
  });

  if (!applications) return [];
  if (!memoizedStateRef.current[tab]) {
    memoizedStateRef.current[tab] = (tab === 'all')
      ? applications
      : applications.filter(({ status }) => status === tab);
  }

  return memoizedStateRef.current[tab];
};
