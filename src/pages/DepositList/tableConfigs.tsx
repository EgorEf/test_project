import { TTableConfigs } from '../../app/types';
import { Role } from '../../helpers/Roles';
import { TableUserRow } from './components/TableUserRow';
import { TableAdminRow } from './components/TableAdminRow';

export const tableConfigs: TTableConfigs = {
  [Role.ADMIN]: {
    columns: ['Создан', 'Клиент', 'Вид депозита', 'Сумма', 'Срок', 'Статус'],
    renderRow: (dataRow) => <TableAdminRow dataRow={dataRow} />,
    applications: null
  },
  [Role.USER]: {
    columns: ['Создан', 'Вид депозита', 'Сумма', 'Срок', 'Статус'],
    renderRow: (dataRow) => <TableUserRow dataRow={dataRow} />,
    applications: null
  }
};
