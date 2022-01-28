import { useState, FC } from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { PageHeader } from '../../components/PageHeader';
import { TableTabs } from './components/TableTabs';
import { FilterSettings } from './components/FilterSettings';
import { FilterSearchLine } from './components/FilterSearchLine';
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
  const [isFilterLoading, setLoad] = useState(false);

  console.log(filter);
  const { applications, isFetching } = useGetApplications(currentUser.role, currentUser.id);

  const filteredApplications = useGetFilteredApplications(currentUser.role, filter, applications);

  const isLoading = (isFilterLoading || isFetching);

  return (
    <Box>
      <PageHeader text="Список депозитных заявок" />
      <Stack direction="row" my={3} spacing={5}>
        <FilterSearchLine
          setFilter={setFilter}
          setLoad={setLoad}
          placeholder={tableConfig.placeholder}
        />
        <FilterSettings settings={filter.settings} setFilter={setFilter} setLoad={setLoad} />
      </Stack>
      <TableTabs tab={filter.tab} tabs={tableConfig.tabs} setFilter={setFilter} />
      <Box mt={3}>
        <TableBlock tableConfig={tableConfig} data={filteredApplications} isFetching={isLoading} />
      </Box>
    </Box>
  );
};
