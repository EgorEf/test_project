import { FC } from 'react';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableSortLabel from '@mui/material/TableSortLabel';
import {
  TOrder, TColumnCell, TOrderBy, THandleSort
} from '../../../app/types/depositListTableTypes';

type PropType = {
  columns: TColumnCell[],
  order: TOrder,
  orderBy: TOrderBy,
  handleSort: THandleSort
};

export const TableHeader: FC<PropType> = ({
  columns, order, orderBy, handleSort
}) => (
  <TableHead>
    <TableRow>
      {columns.map(({ id, label, width }) => (
        <TableCell key={id} sortDirection={orderBy === id ? order : false} sx={{ width }}>
          <TableSortLabel
            active={orderBy === id}
            direction={orderBy === id ? order : 'asc'}
            onClick={handleSort(id)}
          >
            {label}
          </TableSortLabel>
        </TableCell>
      ))}
    </TableRow>
  </TableHead>
);
