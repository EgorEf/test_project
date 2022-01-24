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
import { TApplication } from '../../../app/types/applicationTypes';

type PropType = {
  tableConfig: TTableConfig
  data: TApplication[] | null
};

export const TableBlock: FC<PropType> = ({ tableConfig, data }) => {
  const { columns } = tableConfig;
  if (!data) return null;

  const [order, setOrder] = useState<TOrder>('asc');
  const [orderBy, setOrderBy] = useState<TOrderBy>('createdAt');

  const handleSort: THandleSort = (property) => () => {
    const isAsc = (orderBy === property) && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const renderRow = (rowData: TApplication) => (
    <TableRow key={rowData.id}>
      {columns.map(({ id, renderCell }) => {
        if (renderCell) return renderCell(rowData);
        return <TableCell key={id}>{rowData[id]}</TableCell>;
      })}
    </TableRow>
  );

  const sortedRows = stableSort(data, getComparator(order, orderBy));

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
