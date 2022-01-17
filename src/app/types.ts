import { ChangeEvent } from 'react';

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

export interface TUser extends RequestData {
  id: number,
  role: string,
  info: UserInfo
}

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

export type Product = ProductBase & { income: number, amount: number, term: number };

export type TApplicationStatus = 'draft' | 'inProcessing' | 'open';

export type TApplication = {
  id: number,
  userId: number,
  name: string,
  description: string,
  createdAt: string,
  closedAt: string,
  billNum: string | null,
  status: TApplicationStatus,
  currency: string,
  rate: number,
  amount: number,
  income: number,
  term: number,
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