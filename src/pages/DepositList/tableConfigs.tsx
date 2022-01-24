import { TableCell } from '@mui/material';
import { TApplication, TApplicationStatus } from '../../app/types/applicationTypes';
import { TTableConfigs } from '../../app/types/depositListTableTypes';
import { getCurrencySymbol } from '../../helpers/currencySymbols';
import { getStatusName } from '../../modules/status';
import { Status } from '../../helpers/Status';
import { Roles } from '../../app/types/authTypes';
import { BadgeStatus } from './components/BadgeStatus';
import { ConfirmationStatusBlock } from './components/ConfirmationStatusBlock';

const renderAmountCell = ({ amount, currency }: TApplication) => {
  const amountValue = `${amount} ${getCurrencySymbol(currency)}`;
  return <TableCell>{amountValue}</TableCell>;
};

const renderStatusCell = (status: TApplicationStatus, id: number) => {
  const statusLabel = getStatusName(status);

  return (
    <TableCell key={id}>
      <BadgeStatus status={status} label={statusLabel} />
    </TableCell>
  );
};

const renderAdminStatusCell = (dataRow: TApplication) => {
  const { status, id } = dataRow;
  const statusLabel = getStatusName(status);
  console.log(status);
  return (
    <TableCell key={id}>
      {
        status === Status.IN_PROCESSING
          ? <ConfirmationStatusBlock dataRow={dataRow} />
          : <BadgeStatus status={status} label={statusLabel} />
      }
    </TableCell>
  );
};

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
