import { Dispatch, SetStateAction } from 'react';
import { TApplication, TOptions } from './applicationTypes';

export type TOrder = 'asc' | 'desc';
export type TOrderBy = 'createdAt' | 'userName' | 'name' | 'amount' | 'closedAt' | 'status';

export type THandleSort = (property: TOrderBy) => () => void;

export type TColumnCell = {
  id: TOrderBy,
  label: string,
  width: string,
  renderCell?: (dataRow: TApplication) => JSX.Element
}

export type TTabObj = {
  id: string,
  label: string
};

export type TFilterSettings = {
  options: TOptions
};

export type TTableFilter = {
  tab: string | null,
  searchLine: string,
  settings?: TFilterSettings
};

export type TTableConfig = {
  placeholder: string,
  filters: TTableFilter,
  tabs?: TTabObj[],
  columns: TColumnCell[]
};

export type TTableConfigs = {
  [key: string]: TTableConfig
};

export type TSetFilter = Dispatch<SetStateAction<TTableFilter>>