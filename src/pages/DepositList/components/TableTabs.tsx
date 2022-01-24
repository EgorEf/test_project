import {
  FC,
  SyntheticEvent,
  Dispatch,
  SetStateAction
} from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { TTabObj } from '../../../app/types/depositListTableTypes';

type TPropType = {
  tab: string | null,
  tabs: TTabObj[] | undefined,
  setTab: Dispatch<SetStateAction<string | null>>
};

export const TableTabs: FC<TPropType> = ({ tab, tabs, setTab }) => {
  if (!tabs || !tab) return null;

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setTab(newValue);
  };

  return (
    <Tabs
      value={tab}
      onChange={handleChange}
      aria-label="wrapped label tabs"
    >
      {tabs.map(({ id, label }) => <Tab key={id} value={id} label={label} />)}
    </Tabs>
  );
};
