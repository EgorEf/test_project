import {
  FC, Fragment, Dispatch, SetStateAction
} from 'react';
import { styled } from '@mui/material/styles';
import { blue } from '@mui/material/colors';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import { TApplication } from '../../../app/types/applicationTypes';
import { TColumnCell } from '../../../app/types/depositListTableTypes';

const MIN_HEIGHT_ROW = 53;

const CustomTableRow = styled(TableRow)(({
  minHeight: MIN_HEIGHT_ROW,
  '&:nth-of-type(odd)': {
    backgroundColor: blue[50]
  }
}));

type TPropType = {
  rows: TApplication[],
  columns: TColumnCell[],
  emptyRows: number,
  setSelectedRow: Dispatch<SetStateAction<TApplication | null>>
};

export const TableCustomBody: FC<TPropType> = (props) => {
  const {
    rows,
    emptyRows,
    columns,
    setSelectedRow
  } = props;

  const handleSelectRow = (selectedId: number) => () => {
    const currentApplication = rows.find(({ id }) => selectedId === id) || null;
    setSelectedRow(currentApplication);
  };

  const renderRow = (rowData: TApplication) => (
    <CustomTableRow key={rowData.id} onClick={handleSelectRow(rowData.id)} hover>
      {columns.map(({ id, renderCell }) => {
        if (renderCell) return (<Fragment key={id}>{renderCell(rowData)}</Fragment>);
        return <TableCell key={id}>{rowData[id]}</TableCell>;
      })}
    </CustomTableRow>
  );

  return (
    <TableBody>
      {rows.map(renderRow)}
      {emptyRows > 0 && (
        <CustomTableRow style={{ height: MIN_HEIGHT_ROW * emptyRows }}>
          <TableCell colSpan={6} />
        </CustomTableRow>
      )}
    </TableBody>
  );
};
