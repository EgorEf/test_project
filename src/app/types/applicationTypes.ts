import { TOptions } from '.';

export type TApplicationStatus = 'draft' | 'inProcessing' | 'reject' | 'open';

export type TApplication = {
  id: number,
  userId: number,
  userName: string,
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