import { FC } from 'react';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

type PropType = {
  columns: string[]
};

export const TableHeader: FC<PropType> = ({ columns }) => (
  <TableHead>
    <TableRow>
      {columns.map((columnName) => (
        <TableCell key={columnName}>{columnName}</TableCell>
      ))}
    </TableRow>
  </TableHead>
);
