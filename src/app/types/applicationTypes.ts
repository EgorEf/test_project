import { TOptions } from '.';

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
  options: TOptions
};

export type TStatusPropType = {
  status: TApplicationStatus
};