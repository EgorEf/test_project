import { useState, FC } from 'react';
import Box from '@mui/material/Box';
import { PageHeader } from '../../components/PageHeader';
import { TableTabs } from './components/TableTabs';
import { TableFilter } from './components/TableFilter';
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

  const [filter, setFilter] = useState(tableConfig.filters);

  const { applications, isFetching } = useGetApplications(currentUser.role, currentUser.id);

  const filteredApplications = useGetFilteredApplications(filter.tab, applications);

  return (
    <Box>
      <PageHeader text="Список депозитных заявок" />
      <Box mt={3}>
        <TableFilter filter={filter} setFilter={setFilter} placeholder={tableConfig.placeholder} />
      </Box>
      {
        tableConfig.tabs && (
          <Box mt={3}>
            <TableTabs tab={filter.tab} tabs={tableConfig.tabs} setFilter={setFilter} />
          </Box>
        )
      }
      <Box mt={3}>
        <TableBlock tableConfig={tableConfig} data={filteredApplications} isFetching={isFetching} />
      </Box>
    </Box>
  );
};
