import { TApplication } from './applicationTypes';

export type TOrder = 'asc' | 'desc';
export type TOrderBy = 'createdAt' | 'userName' | 'name' | 'amount' | 'closedAt' | 'status';

export type THandleSort = (property: TOrderBy) => () => void;

export type TColumnCell = {
  id: TOrderBy,
  label: string
}

export type TTableConfig = {
  columns: TColumnCell[],
  rows: TApplication[] | null,
  renderRow: (dataRow: TApplication) => JSX.Element
};

export type TTableConfigs = {
  [key: string]: TTableConfig
};