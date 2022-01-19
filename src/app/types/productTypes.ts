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
