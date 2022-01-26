import { ChangeEvent } from 'react';
import { TApplication, TOptions } from './applicationTypes';

export type TCalculatorPropType = {
  handleChange: (e: ChangeEvent) => void,
  value: string | number | TOptions,
};

export type TTableRowProp = {
  dataRow: TApplication
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

export type TMappedObjToStr = {
  [key: string]: string
};

export type TAnchorEl = HTMLButtonElement | null
