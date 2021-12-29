import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { ReturnTypeFunc } from '../../../app/types';

const loaderBoxStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%'
};

export const Loader = (): ReturnTypeFunc => (
  <Box sx={loaderBoxStyle}>
    <CircularProgress />
  </Box>
);
