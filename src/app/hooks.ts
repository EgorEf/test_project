import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import uniqueId from 'lodash.uniqueid';
import { useGetApplicationByIdQuery } from '../services/applicationsApi';
import { TApplication, Product, User } from './types';
import type { RootState, AppDispatch } from './store';
import { getCreatedAtDate } from '../helpers/date';

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
    income,
    options
  }: Product = selectedProduct;

  const id = Number(uniqueId());

  const createdAt = getCreatedAtDate();

  const applicationTemplate: TApplication = {
    id,
    userId: currentUser.id,
    name,
    description,
    createdAt,
    billNum: null,
    status: 'draft',
    currency,
    rate,
    income,
    options
  };

  return applicationTemplate;
};
