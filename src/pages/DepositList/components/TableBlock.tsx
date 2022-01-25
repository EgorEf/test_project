import {
  FC, ChangeEvent, useState, Fragment
} from 'react';
import { styled } from '@mui/material/styles';
import { blue } from '@mui/material/colors';
import Table from '@mui/material/Table';
import TablePagination from '@mui/material/TablePagination';
import Paper from '@mui/material/Paper';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import { TableHeader } from './TableHeader';
import { TableModal } from './TableModal';
import { stableSort, getComparator } from '../../../helpers/sort';
import {
  TTableConfig, TOrder, TOrderBy, THandleSort
} from '../../../app/types/depositListTableTypes';
import { TApplication } from '../../../app/types/applicationTypes';

const MIN_HEIGHT_ROW = 53;

const CustomTableRow = styled(TableRow)(({
  minHeight: MIN_HEIGHT_ROW,
  '&:nth-of-type(odd)': {
    backgroundColor: blue[50]
  }
}));

type TPropType = {
  tableConfig: TTableConfig
  data: TApplication[] | null
};

export const TableBlock: FC<TPropType> = ({ tableConfig, data }) => {
  const { columns } = tableConfig;
  if (!data) return null;

  const [order, setOrder] = useState<TOrder>('asc');
  const [orderBy, setOrderBy] = useState<TOrderBy>('createdAt');
  const [selectedRow, setSelectedRow] = useState<TApplication | null>(null);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSort: THandleSort = (property) => () => {
    const isAsc = (orderBy === property) && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectRow = (selectedId: number) => () => {
    const currentApplication = data.find(({ id }) => selectedId === id) || null;
    setSelectedRow(currentApplication);
  };

  const renderRow = (rowData: TApplication) => (
    <CustomTableRow key={rowData.id} onClick={handleSelectRow(rowData.id)} hover>
      {columns.map(({ id, renderCell }) => {
        if (renderCell) {
          return (
            <Fragment key={id}>{renderCell(rowData)}</Fragment>
          );
        }
        return <TableCell key={id}>{rowData[id]}</TableCell>;
      })}
    </CustomTableRow>
  );

  const sortedRows = stableSort(data, getComparator(order, orderBy));
  const rowsForPage = sortedRows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
  const emptyRows = (page > 0)
    ? Math.max(0, (1 + page) * rowsPerPage - sortedRows.length)
    : 0;

  return (
    <>
      <Paper variant="outlined" sx={{ borderRadius: 5, overflow: 'hidden' }} square>
        <TableContainer>
          <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
            <TableHeader
              columns={columns}
              order={order}
              orderBy={orderBy}
              handleSort={handleSort}
            />
            <TableBody>
              {rowsForPage.map(renderRow)}
              {emptyRows > 0 && (
                <CustomTableRow style={{ height: MIN_HEIGHT_ROW * emptyRows }}>
                  <TableCell colSpan={6} />
                </CustomTableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={sortedRows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          sx={{ background: blue[100] }}
        />
      </Paper>
      {selectedRow && <TableModal data={selectedRow} setSelectedRow={setSelectedRow} />}
    </>
  );
};
