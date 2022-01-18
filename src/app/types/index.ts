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