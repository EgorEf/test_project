import { FC, useMemo } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import { selectCurrentUser } from '../../Auth/authSlice';
import { useAppSelector as useSelector } from '../../../app/hooks';
import { TApplication } from '../../../app/types/applicationTypes';
import { TableHeader } from './TableHeader';

type PropType = {
  applications: TApplication[] | null
};

export const TableBlock: FC<PropType> = ({ applications }) => {
  const currentUser = useSelector(selectCurrentUser);

  if (!applications || !currentUser) return null;

  const { role } = currentUser;

  const columns = useMemo(() => {
    if (role === 'user') return ['Создан', 'Вид депозита', 'Сумма', 'Срок', 'Статус'];
    return ['Создан', 'Клиент', 'Вид депозита', 'Сумма', 'Срок', 'Статус'];
  }, [role]);

  const renderRow = (row: TApplication) => (
    <TableRow
      key={row.name}
    >
      <TableCell component="th" scope="row">{row.createdAt}</TableCell>
      <TableCell>{row.name}</TableCell>
      <TableCell>{row.amount}</TableCell>
      <TableCell>{row.closedAt}</TableCell>
      <TableCell>{row.status}</TableCell>
    </TableRow>
  );

  return (
    <TableContainer>
      <Table
        sx={{ minWidth: 750 }}
        aria-labelledby="tableTitle"
      >
        <TableHeader columns={columns} />
        <TableBody>
          {applications.map(renderRow)}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
