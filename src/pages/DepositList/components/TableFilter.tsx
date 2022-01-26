import { FC, ChangeEvent } from 'react';
import Stack from '@mui/material/Stack';
import OutlinedInput from '@mui/material/OutlinedInput';
import SearchIcon from '@mui/icons-material/Search';
import { FilterSettings } from './FilterSettings';
import { TSetFilter, TTableFilter } from '../../../app/types/depositListTableTypes';

type TPropType = {
  filter: TTableFilter,
  setFilter: TSetFilter,
  placeholder: string
};

export const TableFilter: FC<TPropType> = ({ filter, setFilter, placeholder }) => {
  const { settings } = filter;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const searchLine = event.target.value;
    setFilter((prevState) => ({ ...prevState, searchLine }));
  };

  return (
    <Stack direction="row" spacing={5}>
      <OutlinedInput
        size="small"
        placeholder={placeholder}
        sx={{ width: '50%' }}
        onChange={handleChange}
        endAdornment={<SearchIcon color="action" />}
      />
      {settings && <FilterSettings settings={settings} setFilter={setFilter} />}
    </Stack>
  );
};
