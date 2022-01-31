import {
  FC,
  useState,
  useMemo,
  Dispatch,
  SetStateAction,
  ChangeEvent
} from 'react';
import set from 'lodash.set';
import debounce from 'lodash.debounce';
import Popover from '@mui/material/Popover';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import FormLabel from '@mui/material/FormLabel';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { TAnchorEl } from '../../../app/types';
import { TSetFilter, TFilterSettings, TSetLoad } from '../../../app/types/depositListTableTypes';
import { options as mappedOptions } from '../../../helpers/options';

type TPropType = {
  id: string | undefined,
  isOpen: boolean,
  anchorEl: TAnchorEl,
  setAnchorEl: Dispatch<SetStateAction<TAnchorEl>>
  setFilter: TSetFilter,
  setLoad: TSetLoad,
  settings: TFilterSettings
};

export const FilterPopover: FC<TPropType> = (props) => {
  const {
    id,
    isOpen,
    anchorEl,
    setAnchorEl,
    setFilter,
    setLoad,
    settings
  } = props;

  const { options, amount } = settings;

  const [optionsState, setOptions] = useState({ ...options });
  const [amountState, setAmount] = useState({ ...amount });

  const handleClose = () => setAnchorEl(null);

  const handleClick = (newSettings: TFilterSettings) => {
    handleClose();
    setFilter((prevState) => set({ ...prevState }, 'settings', newSettings));
    setLoad(false);
  };

  const debouncedClickHandler = useMemo(
    () => debounce(handleClick, 1000),
    []
  );

  const handlerWithLoading = () => {
    setLoad(true);
    const newSettings = { options: optionsState, amount: amountState };
    return debouncedClickHandler(newSettings);
  };

  const handleChangeOptions = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;
    setOptions((prevState) => ({ ...prevState, [name]: checked }));
  };

  const handleAmountChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setAmount((prevState) => ({ ...prevState, [name]: value }));
  };

  const renderOptions = () => {
    const optionsColl = Object.entries(optionsState);
    return optionsColl.map(([key, checked]) => {
      const name = mappedOptions[key];
      return (
        <FormControlLabel
          key={key}
          control={
            <Checkbox checked={checked} name={key} onChange={handleChangeOptions} />
          }
          label={name}
        />
      );
    });
  };

  return (
    <Popover
      id={id}
      open={isOpen}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left'
      }}
    >
      <Stack p={2} spacing={2}>
        <Typography variant="h6">Настройте фильтры</Typography>
        <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
          <FormLabel component="legend">Опции</FormLabel>
          <FormGroup>
            {renderOptions()}
          </FormGroup>
        </FormControl>
        <Stack>
          <InputLabel>Сумма</InputLabel>
          <Stack direction="row" spacing={2}>
            <OutlinedInput
              name="start"
              size="small"
              type="number"
              defaultValue={amountState.start}
              placeholder="От"
              onChange={handleAmountChange}
            />
            <OutlinedInput
              name="end"
              size="small"
              type="number"
              defaultValue={amountState.end}
              placeholder="До"
              onChange={handleAmountChange}
            />
          </Stack>
        </Stack>
        <Box mt={3}>
          <Button variant="contained" type="button" onClick={handlerWithLoading}>Применить</Button>
        </Box>
      </Stack>
    </Popover>
  );
};
