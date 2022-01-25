import {
  FC, Fragment, Dispatch, SetStateAction
} from 'react';
import { styled } from '@mui/material/styles';
import { blue, grey } from '@mui/material/colors';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { Loader } from '../../../components/Loader';
import { TApplication } from '../../../app/types/applicationTypes';
import { TColumnCell } from '../../../app/types/depositListTableTypes';

const MIN_HEIGHT_ROW = 53;

const CustomTableRow = styled(TableRow)(({
  minHeight: MIN_HEIGHT_ROW,
  '&:nth-of-type(odd)': {
    backgroundColor: blue[50]
  }
}));

const NotFoundedBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

type TPropType = {
  rows: TApplication[],
  columns: TColumnCell[],
  emptyRows: number,
  isFetching: boolean,
  setSelectedRow: Dispatch<SetStateAction<TApplication | null>>
};

export const TableCustomBody: FC<TPropType> = (props) => {
  const {
    rows,
    emptyRows,
    columns,
    isFetching,
    setSelectedRow
  } = props;

  const handleSelectRow = (selectedId: number) => () => {
    const currentApplication = rows.find(({ id }) => selectedId === id) || null;
    setSelectedRow(currentApplication);
  };

  const renderAdditionalContent = () => (
    <CustomTableRow>
      <TableCell colSpan={6}>
        {(isFetching) && <Loader />}
        {(rows.length === 0 && !isFetching) && (
          <NotFoundedBox>
            <Typography variant="h6" sx={{ color: grey[500] }}>Нет доступных депозитов</Typography>
          </NotFoundedBox>
        )}
      </TableCell>
    </CustomTableRow>
  );

  const renderRows = () => (
    <>
      {rows.map((rowData) => (
        <CustomTableRow key={rowData.id} onClick={handleSelectRow(rowData.id)} hover>
          {columns.map(({ id, renderCell }) => {
            if (renderCell) return (<Fragment key={id}>{renderCell(rowData)}</Fragment>);
            return <TableCell key={id}>{rowData[id]}</TableCell>;
          })}
        </CustomTableRow>
      ))}
      {emptyRows > 0 && (
        <CustomTableRow style={{ height: MIN_HEIGHT_ROW * emptyRows }}>
          <TableCell colSpan={6} />
        </CustomTableRow>
      )}
    </>
  );

  return (
    <TableBody>
      {(isFetching || rows.length === 0) ? renderAdditionalContent() : renderRows()}
    </TableBody>
  );
};
