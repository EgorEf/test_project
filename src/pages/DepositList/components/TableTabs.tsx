import { FC, SyntheticEvent } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { TTabObj, TSetFilter } from '../../../app/types/depositListTableTypes';

type TPropType = {
  tab: string | null,
  tabs: TTabObj[] | undefined,
  setFilter: TSetFilter
};

export const TableTabs: FC<TPropType> = ({ tab, tabs, setFilter }) => {
  if (!tabs || !tab) return null;

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setFilter((prevState) => ({ ...prevState, tab: newValue }));
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
