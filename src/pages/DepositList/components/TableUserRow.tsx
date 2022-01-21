import { FC } from 'react';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import { getCurrencySymbol } from '../../../helpers/currencySymbols';
import { getStatusName } from '../../../modules/status';
import { TTableRowProp } from '../../../app/types';

export const TableUserRow: FC<TTableRowProp> = ({ dataRow }) => {
  const {
    id, createdAt, name, amount, closedAt, status, currency
  } = dataRow;

  const amountValue = `${amount} ${getCurrencySymbol(currency)}`;

  return (
    <TableRow
      key={id}
    >
      <TableCell component="th" scope="row">{createdAt}</TableCell>
      <TableCell>{name}</TableCell>
      <TableCell>{amountValue}</TableCell>
      <TableCell>{closedAt}</TableCell>
      <TableCell>{getStatusName(status)}</TableCell>
    </TableRow>
  );
};
