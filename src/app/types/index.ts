import { ChangeEvent } from 'react';

export type TOptions = {
  isEarlyRepayment: boolean,
  isPartial: boolean,
  isCapitalization: boolean
};

export type TCalculatorPropType = {
  handleChange: (e: ChangeEvent) => void,
  value: string | number | TOptions,
};

export type TRoutes = {
  BASE_URL: string,
  LOGIN: string,
  DEPOSIT_CALCULATOR: string,
  DEPOSIT_APPLICATION: {
    PATH: string,
    NEW: (id: number) => string,
    BY_ID: (id: number) => string
  },
  DEPOSIT_LIST: string
};