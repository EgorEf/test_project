import { TTableConfigs } from '../../app/types/depositListTableTypes';
import { Role } from '../../helpers/Roles';
import { TableUserRow } from './components/TableUserRow';
import { TableAdminRow } from './components/TableAdminRow';

export const tableConfigs: TTableConfigs = {
  [Role.ADMIN]: {
    columns: [
      { id: 'createdAt', label: 'Создан' },
      { id: 'userName', label: 'Клиент' },
      { id: 'name', label: 'Вид депозита' },
      { id: 'amount', label: 'Сумма' },
      { id: 'closedAt', label: 'Срок' },
      { id: 'status', label: 'Статус' }
    ],
    rows: [],
    renderRow: (dataRow) => <TableAdminRow dataRow={dataRow} />
  },
  [Role.USER]: {
    columns: [
      { id: 'createdAt', label: 'Создан' },
      { id: 'name', label: 'Вид депозита' },
      { id: 'amount', label: 'Сумма' },
      { id: 'closedAt', label: 'Срок' },
      { id: 'status', label: 'Статус' }
    ],
    rows: [],
    renderRow: (dataRow) => <TableUserRow dataRow={dataRow} />
  }
};
