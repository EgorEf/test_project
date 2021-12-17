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

export type OptionValuesType = {
  isEarlyRepayment: boolean,
  isPartial: boolean,
  isCapitalization: boolean
};

export type PropsType = {
  value?: string | number,
  handleChange?: (e: ChangeEvent) => void,
  currencySymbol?: string,
  optionValues?: OptionValuesType
};