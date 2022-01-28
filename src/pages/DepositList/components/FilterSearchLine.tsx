import { FC, useMemo, ChangeEvent } from 'react';
import debounce from 'lodash.debounce';
import OutlinedInput from '@mui/material/OutlinedInput';
import SearchIcon from '@mui/icons-material/Search';
import { TSetFilter, TSetLoad } from '../../../app/types/depositListTableTypes';

type TPropType = {
  setLoad: TSetLoad,
  setFilter: TSetFilter,
  placeholder: string
};

export const FilterSearchLine: FC<TPropType> = ({ setLoad, setFilter, placeholder }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const searchLine = event.target.value.toLowerCase();
    setFilter((prevState) => ({ ...prevState, searchLine }));
    setLoad(false);
  };

  const debouncedChangeHandler = useMemo(
    () => debounce(handleChange, 1000),
    []
  );

  const changeHandleWidthLoader = (event: ChangeEvent<HTMLInputElement>) => {
    setLoad(true);
    debouncedChangeHandler(event);
  };

  return (
    <OutlinedInput
      size="small"
      placeholder={placeholder}
      sx={{ width: '50%' }}
      onChange={changeHandleWidthLoader}
      endAdornment={<SearchIcon color="action" />}
    />
  );
};
