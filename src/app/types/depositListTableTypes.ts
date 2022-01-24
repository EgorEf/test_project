import { TApplication } from './applicationTypes';

export type TOrder = 'asc' | 'desc';
export type TOrderBy = 'createdAt' | 'userName' | 'name' | 'amount' | 'closedAt' | 'status';

export type THandleSort = (property: TOrderBy) => () => void;

export type TColumnCell = {
  id: TOrderBy,
  label: string,
  renderCell?: (dataRow: TApplication) => JSX.Element
}

export type TTabObj = {
  id: string,
  label: string
};

export type TTableConfig = {
  tabs?: TTabObj[],
  columns: TColumnCell[]
};

export type TTableConfigs = {
  [key: string]: TTableConfig
};