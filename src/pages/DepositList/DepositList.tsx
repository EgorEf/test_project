import { useState, FC } from 'react';
import Box from '@mui/material/Box';
import { PageHeader } from '../../components/PageHeader';
import { TableTabs } from './components/TableTabs';
import { TableBlock } from './components/TableBlock';
import {
  useGetCurrentUser,
  useGetApplications,
  useGetFilteredApplications
} from '../../app/hooks';
import { tableConfigs } from './tableConfigs';

export const DepositList: FC = () => {
  const currentUser = useGetCurrentUser();
  if (!currentUser) return null;

  const tableConfig = tableConfigs[currentUser.role];

  const [tab, setTab] = useState<string | null>(tableConfig.tabs ? 'all' : null);

  const allApplications = useGetApplications(currentUser.role, currentUser.id);

  const applicationsByTab = useGetFilteredApplications(tab, allApplications);

  return (
    <Box>
      <PageHeader text="Список депозитных заявок" />
      {
        tableConfig.tabs && (
          <Box mt={3}>
            <TableTabs tab={tab} tabs={tableConfig.tabs} setTab={setTab} />
          </Box>
        )
      }
      <TableBlock tableConfig={tableConfig} data={applicationsByTab} />
    </Box>
  );
};
