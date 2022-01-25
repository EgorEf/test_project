import { FC } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const loaderBoxStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%'
};

export const Loader: FC = () => (
  <Box sx={loaderBoxStyle}>
    <CircularProgress />
  </Box>
);
