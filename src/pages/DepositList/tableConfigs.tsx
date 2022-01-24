import { TableCell } from '@mui/material';
import { TApplication, TApplicationStatus } from '../../app/types/applicationTypes';
import { TTableConfigs } from '../../app/types/depositListTableTypes';
import { getCurrencySymbol } from '../../helpers/currencySymbols';
import { getStatusName } from '../../modules/status';
import { Role } from '../../helpers/Roles';
import { BadgeStatus } from './components/BadgeStatus';

const renderAmountCell = ({ amount, currency }: TApplication) => {
  const amountValue = `${amount} ${getCurrencySymbol(currency)}`;
  return <TableCell>{amountValue}</TableCell>;
};

const renderStatusCell = (status: TApplicationStatus) => {
  const statusLabel = getStatusName(status);

  return (
    <TableCell>
      <BadgeStatus status={status} label={statusLabel} />
    </TableCell>
  );
};

export const tableConfigs: TTableConfigs = {
  [Role.ADMIN]: {
    columns: [
      { id: 'createdAt', label: 'Создан' },
      { id: 'userName', label: 'Клиент' },
      { id: 'name', label: 'Вид депозита' },
      { id: 'amount', label: 'Сумма', renderCell: (dataRow) => renderAmountCell(dataRow) },
      { id: 'closedAt', label: 'Срок' },
      { id: 'status', label: 'Статус', renderCell: ({ status }) => renderStatusCell(status) }
    ]
  },
  [Role.USER]: {
    tabs: [
      { id: 'all', label: 'Все депозиты' },
      { id: 'draft', label: 'Черновики' },
      { id: 'inProcessing', label: 'В рассмотрении' },
      { id: 'open', label: 'Открытые' }
    ],
    columns: [
      { id: 'createdAt', label: 'Создан' },
      { id: 'name', label: 'Вид депозита' },
      { id: 'amount', label: 'Сумма', renderCell: (dataRow) => renderAmountCell(dataRow) },
      { id: 'closedAt', label: 'Срок' },
      { id: 'status', label: 'Статус', renderCell: ({ status }) => renderStatusCell(status) }
    ]
  }
};
