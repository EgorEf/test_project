import { ReactElement, ChangeEvent } from 'react';

export interface RequestData {
  email: string,
  password: string
}

export interface LoginState extends RequestData {
  isRemember: boolean
}

export interface ResponseData extends RequestData {
  id: number,
  role: string
}

export type User = ResponseData | null;

export type UserState = {
  user: User
};

export type ReturnTypeFunc = ReactElement | null;

export type Options = {
  isEarlyRepayment: boolean,
  isPartial: boolean,
  isCapitalization: boolean
};

export type PropsType = {
  handleChange: (e: ChangeEvent) => void,
  value: string | number | Options,
};

export type ProductResponse = {
  id: 1,
  name: string,
  currency: string,
  minAmount: number,
  period: Array<number>,
  periodStep: number,
  rate: number,
  rateStep: number,
  options: Options
};

export type ProductRequest = {
  currency: string,
  amount: number,
  term: number,
  isEarlyRepayment: boolean,
  isPartial: boolean,
  isCapitalization: boolean
};

export type Product = {
  id: 1,
  name: string,
  currency: string,
  period: Array<number>,
  rate: number,
  income?: number,
  options: {
    isEarlyRepayment: boolean,
    isPartial: boolean,
    isCapitalization: boolean
  }
};
