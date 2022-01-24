import { TableCell } from '@mui/material';
import { TApplication, TApplicationStatus } from '../../app/types/applicationTypes';
import { TTableConfigs } from '../../app/types/depositListTableTypes';
import { currencySymbols } from '../../helpers/currencySymbols';
import { statusLabels } from '../../helpers/statusLabels';
import { Roles } from '../../app/types/authTypes';
import { BadgeStatus } from './components/BadgeStatus';
import { ConfirmationStatusBlock } from './components/ConfirmationStatusBlock';

const renderAmountCell = ({ amount, currency }: TApplication) => {
  const amountValue = `${amount} ${currencySymbols[currency]}`;
  return <TableCell>{amountValue}</TableCell>;
};

const renderStatusCell = (status: TApplicationStatus, id: number) => {
  const statusLabel = statusLabels[status];

  return (
    <TableCell key={id}>
      <BadgeStatus status={status} label={statusLabel} />
    </TableCell>
  );
};

const renderAdminStatusCell = (dataRow: TApplication) => (
  <TableCell key={dataRow.id}>
    <ConfirmationStatusBlock dataRow={dataRow} />
  </TableCell>
);

export const tableConfigs: TTableConfigs = {
  [Roles.ADMIN]: {
    columns: [
      { id: 'createdAt', label: 'Создан' },
      { id: 'userName', label: 'Клиент' },
      { id: 'name', label: 'Вид депозита' },
      { id: 'amount', label: 'Сумма', renderCell: (dataRow) => renderAmountCell(dataRow) },
      { id: 'closedAt', label: 'Срок' },
      { id: 'status', label: 'Статус', renderCell: (dataRow) => renderAdminStatusCell(dataRow) }
    ]
  },
  [Roles.USER]: {
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
      { id: 'status', label: 'Статус', renderCell: ({ status, id }) => renderStatusCell(status, id) }
    ]
  }
};
