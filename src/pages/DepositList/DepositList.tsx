import {
  useState, SyntheticEvent, FC
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

  const tableConfig = tableConfigs[currentUser.role];
  tableConfig.rows = applicationsByTab;

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
