import { FC } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { useGetCurrentUser } from '../../../app/hooks';
import { ReturnTypeFunc, TApplication } from '../../../app/types';

type PropType = {
  applications: TApplication[] | null
};

const TableHeader = () => {
  const currentUser = useGetCurrentUser();
};

export const TableBlock: FC<PropType> = ({ applications }) => {
  if (!applications) return null;

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
        <TableHead>
          <TableRow>
            <TableCell>Создан</TableCell>
            <TableCell>Вид депозита</TableCell>
            <TableCell>Сумма</TableCell>
            <TableCell>Срок</TableCell>
            <TableCell>Статус</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {applications.map(renderRow)}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
