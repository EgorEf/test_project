import {
  FC,
  Dispatch,
  SetStateAction,
  ChangeEvent
} from 'react';
import Popover from '@mui/material/Popover';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import FormLabel from '@mui/material/FormLabel';
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

  const { options } = settings;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const optionName = event.target.name;
    const optionValue = event.target.checked;

    setFilter((prevState) => {
      const prevOptions = prevState.settings?.options;
      if (!prevOptions) return prevState;
      const newOptions = { ...prevOptions, [optionName]: optionValue };
      return {
        ...prevState,
        settings: { options: newOptions }
      };
    });
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const renderOptions = () => {
    const optionsColl = Object.entries(options);
    return optionsColl.map(([key, value]) => {
      const name = mappedOptions[key];
      return (
        <FormControlLabel
          key={key}
          control={
            <Checkbox checked={value} name={key} onChange={handleChange} />
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
      </Stack>
    </Popover>
  );
};
