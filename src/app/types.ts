import { ReactElement, ChangeEvent } from 'react';

export interface RequestData {
  email: string,
  password: string
}

export interface LoginState extends RequestData {
  isRemember: boolean
}

export type UserInfo = {
  name: string,
  taxNumber: string
} | null;

export interface ResponseData extends RequestData {
  id: number,
  role: string,
  info: UserInfo
}

export type User = ResponseData;

export type UserState = {
  user: User | null
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
  id: number,
  name: string,
  description: string,
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

export type ProductBase = {
  id: number,
  name: string,
  description: string,
  currency: string,
  period: Array<number>,
  rate: number,
  options: Options
};

export type Product = ProductBase & { income: number }

export type TApplicationStatus = 'draft' | 'inProcessing' | 'open';

export type TApplication = {
  id: number,
  userId: number,
  name: string,
  description: string,
  billNum: string | null,
  status: TApplicationStatus,
  currency: string,
  rate: number,
  income: number,
  options: Options
};

export type StatusPropType = {
  status: TApplicationStatus
};

export type TBill = {
  id: number,
  userId: number,
  currency: string,
  numBill: string
};