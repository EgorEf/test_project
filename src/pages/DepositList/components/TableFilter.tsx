import { FC } from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import FilterListIcon from '@mui/icons-material/FilterList';
import Typography from '@mui/material/Typography';

export const TableFilter: FC = () => {
  console.log('filter');
  return (
    <Stack direction="row">
      <Stack direction="row" spacing={1} alignItems="center">
        <IconButton>
          <FilterListIcon color="primary" />
        </IconButton>
        <Typography variant="body1" color="primary" sx={{ cursor: 'default' }}>
          Фильтры
        </Typography>
      </Stack>
    </Stack>
  );
};
