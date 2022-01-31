import { useRef } from 'react';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import isEqual from 'lodash.isequal';
import { useGetApplicationsInProcessingQuery, useGetApplicationsByUserIdQuery } from '../services/applicationsApi';
import { TUser, Roles } from './types/authTypes';
import { TProduct } from './types/productTypes';
import { TApplication } from './types/applicationTypes';
import { TTableFilter } from './types/depositListTableTypes';
import type { RootState, AppDispatch } from './store';
import { uniqueId } from '../helpers/uniqueId';
import { date } from '../modules/date';
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

  const createdAt = date.getCreatedAt();
  const closedAt = date.getClosedAt(createdAt, term);

  return {
    id: uniqueId(),
    userId: currentUser.id,
    userName: currentUser.info.name,
    name,
    description,
    createdAt,
    closedAt,
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

type TReturnGetApplicationsHook = {
  applications: TApplication[] | undefined,
  isFetching: boolean
};

export const useGetApplications = (
  userRole: string,
  userId: number
): TReturnGetApplicationsHook => {
  if (userRole === Roles.ADMIN) {
    const { data: applicationsInProcessing, isFetching } = useGetApplicationsInProcessingQuery();
    return { applications: applicationsInProcessing, isFetching };
  }
  const { data: userApplications, isFetching } = useGetApplicationsByUserIdQuery(userId);
  return { applications: userApplications, isFetching };
};

type MappedObj = {
  [key: string]: TApplication[] | null
};

const useGetFilteredApplicationsByTab = (
  tab: string | null,
  applications: TApplication[] | undefined
): TApplication[] => {
  const memoizedStateRef = useRef<MappedObj>({
    all: null,
    draft: null,
    inProcessing: null,
    open: null
  });

  if (!applications) return [];
  if (!tab) return applications;

  if (!memoizedStateRef.current[tab]) {
    memoizedStateRef.current[tab] = (tab === 'all')
      ? applications
      : applications.filter(({ status }) => status === tab);
  }

  const applicationByTab = memoizedStateRef.current[tab];
  return (!applicationByTab) ? [] : applicationByTab;
};

export const useGetFilteredApplications = (
  role: string,
  filter: TTableFilter,
  applications: TApplication[] | undefined
): TApplication[] => {
  const { tab, searchLine, settings } = filter;

  const filteredApplicationsByTab = useGetFilteredApplicationsByTab(tab, applications);

  if (!settings) return filteredApplicationsByTab;

  return filteredApplicationsByTab
    .filter(({ name, userName }) => {
      const normalizeName = name.toLowerCase();
      const normalizeUserName = userName.toLowerCase();

      if (searchLine.length === 0) return true;
      if (role === Roles.USER) return normalizeName.includes(searchLine);
      return normalizeName.includes(searchLine) || normalizeUserName.includes(searchLine);
    })
    .filter(({ options }) => {
      const { options: filterOptions } = settings;

      const settingsEntries = Object.entries(filterOptions);
      const isInitOptionsFilter = settingsEntries.every(([, value]) => !value);

      if (isInitOptionsFilter) return true;
      return settingsEntries.find(([key, value]) => (value && options[key] === value));
    })
    .filter(({ amount }) => {
      const { amount: { start, end } } = settings;
      const startValue = (start.length === 0) ? 0 : Number(start);
      const endValue = (end.length === 0) ? Infinity : Number(end);
      return (startValue <= amount && endValue >= amount);
    });
};

export const useHasFilterChanged = (
  initialFilter: TTableFilter,
  currentFilter: TTableFilter
): boolean => (
  isEqual(initialFilter.settings, currentFilter.settings)
);
