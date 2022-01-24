import { useState, FC } from 'react';
import Box from '@mui/material/Box';
import { PageHeader } from '../../components/PageHeader';
import { TableTabs } from './components/TableTabs';
import { TableBlock } from './components/TableBlock';
import {
  useAppSelector as useSelector,
  useGetApplications,
  useGetFilteredApplications
} from '../../app/hooks';
import { tableConfigs } from './tableConfigs';
import { selectCurrentUser } from '../Auth/authSlice';

export const DepositList: FC = () => {
  const currentUser = useSelector(selectCurrentUser);
  if (!currentUser) return null;

  const [tab, setTab] = useState('all');

  const allApplications = useGetApplications(currentUser.role, currentUser.id);

  const applicationsByTab = useGetFilteredApplications(tab, allApplications);

  const tableConfig = tableConfigs[currentUser.role];

  return (
    <Box>
      <PageHeader text="Список депозитных заявок" />
      {
        tableConfigs.tabs && (
          <Box mt={3}>
            <TableTabs tab={tab} tabs={tableConfig.tabs} setTab={setTab} />
          </Box>
        )
      }
      <TableBlock tableConfig={tableConfig} data={applicationsByTab} />
    </Box>
  );
};
