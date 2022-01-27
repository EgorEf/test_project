export type TApplicationStatus = 'draft' | 'inProcessing' | 'reject' | 'open';

export type TOptions = {
  [key: string]: boolean,
  isEarlyRepayment: boolean,
  isPartial: boolean,
  isCapitalization: boolean
};

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

export enum Statuses {
  DRAFT = 'draft',
  IN_PROCESSING = 'inProcessing',
  REJECT = 'reject',
  OPEN = 'open'
}
