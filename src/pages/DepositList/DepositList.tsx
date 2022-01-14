import { useState, useMemo, SyntheticEvent } from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { ReturnTypeFunc } from '../../app/types';
import { PageHeader } from '../../components/PageHeader';
import {
  useAppSelector as useSelector,
  useGetApplications,
  useGetFilteredApplications
} from '../../app/hooks';
import { selectCurrentUser } from '../Auth/authSlice';

export const DepositList = (): ReturnTypeFunc => {
  const currentUser = useSelector(selectCurrentUser);
  const [tab, setTab] = useState('all');

  if (!currentUser) return null;

  const allApplications = useGetApplications(currentUser.role, currentUser.id);

  const applicationsByTab = useGetFilteredApplications(tab, allApplications);

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setTab(newValue);
  };

  return (
    <Box>
      <PageHeader text="Список депозитных заявок" />
      <Box mt={3}>
        <Tabs
          value={tab}
          onChange={handleChange}
          aria-label="wrapped label tabs"
        >
          <Tab value="all" label="Все депозиты" />
          <Tab value="draft" label="Черновики" />
          <Tab value="inProcessing" label="В рассмотрении" />
          <Tab value="open" label="Открытые" />
        </Tabs>
      </Box>
    </Box>
  );
};
