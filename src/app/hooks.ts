import { useRef } from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { useGetAllApplicationsQuery, useGetApplicationsByUserIdQuery } from '../services/applicationsApi';
import { TUser } from './types/authTypes';
import { TProduct } from './types/productTypes';
import { TApplication } from './types/applicationTypes';
import { Role } from './enums';
import type { RootState, AppDispatch } from './store';
import { uniqueId } from '../helpers/uniqueId';
import { ApplicationDate } from '../helpers/ApplicationDate';
import { selectCurrentUser } from '../pages/Auth/authSlice';
import { selectProduct } from '../pages/DepositCalculator/productsSlice';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useGetCurrentUser = (): TUser | null => useAppSelector(selectCurrentUser);

export const useGetSelectedProduct = (productId: number): TProduct | null => (
  useSelector(selectProduct(Number(productId)))
);

export const useGetApplicationTemplate = (productId: number): TApplication | null => {
  const currentUser = useGetCurrentUser();
  const selectedProduct = useGetSelectedProduct(productId);

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
  }: TProduct = selectedProduct;

  const applicationDate = new ApplicationDate(term);

  return {
    id: uniqueId(),
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
};

export const useGetApplications = (
  userRole: string,
  userId: number
): TApplication[] | undefined => {
  if (userRole === Role.ADMIN) {
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
