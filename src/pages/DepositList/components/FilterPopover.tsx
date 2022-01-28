import {
  FC,
  Dispatch,
  SetStateAction,
  ChangeEvent
} from 'react';
import set from 'lodash.set';
import Popover from '@mui/material/Popover';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import FormLabel from '@mui/material/FormLabel';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { TAnchorEl } from '../../../app/types';
import { TSetFilter, TFilterSettings } from '../../../app/types/depositListTableTypes';
import { options as mappedOptions } from '../../../helpers/options';

type TPropType = {
  id: string | undefined,
  isOpen: boolean,
  anchorEl: TAnchorEl,
  setAnchorEl: Dispatch<SetStateAction<TAnchorEl>>
  setFilter: TSetFilter
  settings: TFilterSettings
};

export const FilterPopover: FC<TPropType> = (props) => {
  const {
    id,
    isOpen,
    anchorEl,
    setAnchorEl,
    setFilter,
    settings
  } = props;

  const handleChangeOptions = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = event.target;

    setFilter((prevState) => {
      const { settings: filterSettings } = prevState;
      if (!filterSettings) return prevState;
      const copyState = { ...prevState };
      return set(copyState, ['settings', 'options', name], checked);
    });
  };

  const handleAmountChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFilter((prevState) => {
      const { settings: filterSettings } = prevState;
      if (!filterSettings) return prevState;
      const copyState = { ...prevState };
      return set(copyState, ['settings', 'amount', name], value);
    });
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const renderOptions = () => {
    const { options } = settings;
    const optionsColl = Object.entries(options);
    return optionsColl.map(([key, value]) => {
      const name = mappedOptions[key];
      return (
        <FormControlLabel
          key={key}
          control={
            <Checkbox checked={value} name={key} onChange={handleChangeOptions} />
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
              defaultValue={settings.amount.start}
              placeholder="От"
              onChange={handleAmountChange}
            />
            <OutlinedInput
              name="end"
              size="small"
              type="number"
              defaultValue={settings.amount.end}
              placeholder="До"
              onChange={handleAmountChange}
            />
          </Stack>
        </Stack>
      </Stack>
    </Popover>
  );
};
