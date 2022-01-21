import { FC } from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { TTableRowProp } from '../../../app/types';
import { getCurrencySymbol } from '../../../helpers/currencySymbols';

export const TableAdminRow: FC<TTableRowProp> = ({ dataRow }) => {
  const {
    id, createdAt, name, userName, amount, closedAt, status, currency
  } = dataRow;

  const amountValue = `${amount} ${getCurrencySymbol(currency)}`;

  return (
    <TableRow
      key={id}
    >
      <TableCell component="th" scope="row">{createdAt}</TableCell>
      <TableCell>{name}</TableCell>
      <TableCell>{userName}</TableCell>
      <TableCell>{amountValue}</TableCell>
      <TableCell>{closedAt}</TableCell>
      <TableCell>{status}</TableCell>
    </TableRow>
  );
};
