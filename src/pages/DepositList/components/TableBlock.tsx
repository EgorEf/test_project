import { FC } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import { TApplication } from '../../../app/types/applicationTypes';
import { TableHeader } from './TableHeader';
import { TTableConfig } from '../../../app/types';

type PropType = {
  tableConfig: TTableConfig
};

export const TableBlock: FC<PropType> = ({ tableConfig }) => {
  const { columns, renderRow, applications } = tableConfig;
  if (!applications) return null;

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
