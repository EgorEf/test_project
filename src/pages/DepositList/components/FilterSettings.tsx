import { FC, useState, MouseEvent } from 'react';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import FilterListIcon from '@mui/icons-material/FilterList';
import Typography from '@mui/material/Typography';
import { FilterPopover } from './FilterPopover';
import { TAnchorEl } from '../../../app/types';
import { TFilterSettings, TSetFilter } from '../../../app/types/depositListTableTypes';

type TPropType = {
  settings: TFilterSettings,
  setFilter: TSetFilter
};

export const FilterSettings: FC<TPropType> = ({ settings, setFilter }) => {
  const [anchorEl, setAnchorEl] = useState<TAnchorEl>(null);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const isOpen = Boolean(anchorEl);
  const id = isOpen ? 'filter-popover' : undefined;

  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <IconButton aria-describedby={id} onClick={handleClick}>
        <FilterListIcon color="primary" />
      </IconButton>
      <FilterPopover
        id={id}
        isOpen={isOpen}
        anchorEl={anchorEl}
        setAnchorEl={setAnchorEl}
        setFilter={setFilter}
        settings={settings}
      />
      <Typography variant="body1" color="primary" sx={{ cursor: 'default' }}>
        Фильтры
      </Typography>
    </Stack>
  );
};
