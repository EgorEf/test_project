import {
  useState, SyntheticEvent, FC, useMemo
} from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { PageHeader } from '../../components/PageHeader';
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

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setTab(newValue);
  };

  const tableConfig = useMemo(() => {
    const currentTableConfig = tableConfigs[currentUser.role];
    currentTableConfig.applications = applicationsByTab;
    return currentTableConfig;
  }, [tab]);

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
      <TableBlock tableConfig={tableConfig} />
    </Box>
  );
};
