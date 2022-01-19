import { LazyQueryTrigger } from '@reduxjs/toolkit/dist/query/react/buildHooks';
import {
  QueryDefinition,
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta
} from '@reduxjs/toolkit/dist/query';
import { TOptions } from '.';

export type TProductResponse = {
  id: number,
  name: string,
  description: string,
  currency: string,
  minAmount: number,
  period: Array<number>,
  periodStep: number,
  rate: number,
  rateStep: number,
  options: TOptions
};

export type TProductRequest = {
  currency: string,
  amount: number,
  term: number,
  isEarlyRepayment: boolean,
  isPartial: boolean,
  isCapitalization: boolean
};

export type TProductBase = {
  id: number,
  name: string,
  description: string,
  currency: string,
  period: Array<number>,
  rate: number,
  options: TOptions
};

export type TProduct = TProductBase & { income: number, amount: number, term: number };

export type TGetProducts = LazyQueryTrigger<QueryDefinition<any, BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError, {}, FetchBaseQueryMeta>, never, TProduct[], string>>;
