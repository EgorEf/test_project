import { FC, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { TableHeader } from './TableHeader';
import { stableSort, getComparator } from '../../../helpers/sort';
import {
  TTableConfig, TOrder, TOrderBy, THandleSort
} from '../../../app/types/depositListTableTypes';

type PropType = {
  tableConfig: TTableConfig
};

export const TableBlock: FC<PropType> = ({ tableConfig }) => {
  const { columns, renderRow, rows } = tableConfig;
  if (!rows) return null;

  const [order, setOrder] = useState<TOrder>('asc');
  const [orderBy, setOrderBy] = useState<TOrderBy>('createdAt');

  const handleSort: THandleSort = (property) => () => {
    const isAsc = (orderBy === property) && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const sortedRows = stableSort(rows, getComparator(order, orderBy));

  return (
    <TableContainer>
      <Table
        sx={{ minWidth: 750 }}
        aria-labelledby="tableTitle"
      >
        <TableHeader columns={columns} order={order} orderBy={orderBy} handleSort={handleSort} />
        <TableBody>
          {sortedRows.map(renderRow)}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
