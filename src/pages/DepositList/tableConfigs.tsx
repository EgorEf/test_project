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
      { id: 'createdAt', label: 'Создан', width: '15%' },
      { id: 'userName', label: 'Клиент', width: '20%' },
      { id: 'name', label: 'Вид депозита', width: '20%' },
      {
        id: 'amount', label: 'Сумма', width: '15%', renderCell: (dataRow) => renderAmountCell(dataRow)
      },
      { id: 'closedAt', label: 'Срок', width: '15%' },
      {
        id: 'status', label: 'Статус', width: '15%', renderCell: (dataRow) => renderAdminStatusCell(dataRow)
      }
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
      { id: 'createdAt', label: 'Создан', width: '15%' },
      { id: 'name', label: 'Вид депозита', width: '30%' },
      {
        id: 'amount', label: 'Сумма', width: '20%', renderCell: (dataRow) => renderAmountCell(dataRow)
      },
      { id: 'closedAt', label: 'Срок', width: '15%' },
      {
        id: 'status', label: 'Статус', width: '20%', renderCell: ({ status, id }) => renderStatusCell(status, id)
      }
    ]
  }
};
