import { FC } from 'react';
import Stack from '@mui/material/Stack';
import FilterListOffIcon from '@mui/icons-material/FilterListOff';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

type TPropType = {
  isFilterChanged: boolean
  resetFilter: () => void
};

export const FilterSettingsReset: FC<TPropType> = ({ isFilterChanged, resetFilter }) => {
  if (isFilterChanged) return null;

  const handleResetClick = () => resetFilter();

  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <IconButton onClick={handleResetClick}>
        <FilterListOffIcon color="error" />
      </IconButton>
      <Typography variant="body1" color="error" sx={{ cursor: 'default' }}>
        Сбросить фильтры
      </Typography>
    </Stack>
  );
};
