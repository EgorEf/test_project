import { FC } from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { TTableRowProp } from '../../../app/types';

export const TableAdminRow: FC<TTableRowProp> = ({ dataRow }) => {
  const {
    id, createdAt, name, userName, amount, closedAt, status
  } = dataRow;

  return (
    <TableRow
      key={id}
    >
      <TableCell component="th" scope="row">{createdAt}</TableCell>
      <TableCell>{name}</TableCell>
      <TableCell>{userName}</TableCell>
      <TableCell>{amount}</TableCell>
      <TableCell>{closedAt}</TableCell>
      <TableCell>{status}</TableCell>
    </TableRow>
  );
};
