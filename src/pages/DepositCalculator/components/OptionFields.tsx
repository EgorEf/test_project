import { FC } from 'react';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import FormLabel from '@mui/material/FormLabel';
import Switch from '@mui/material/Switch';
import { TOptions, TCalculatorPropType } from '../../../app/types';

export const OptionFields: FC<TCalculatorPropType> = ({ handleChange, value }) => {
  const { isEarlyRepayment, isPartial, isCapitalization } = value as TOptions;

  return (
    <FormControl>
      <FormLabel component="legend">Опции</FormLabel>
      <FormGroup>
        <FormControlLabel
          control={(
            <Switch name="isEarlyRepayment" checked={isEarlyRepayment} onChange={handleChange} />
          )}
          label="Досрочное расторжение"
        />
        <FormControlLabel
          control={(
            <Switch name="isPartial" checked={isPartial} onChange={handleChange} />
          )}
          label="Частичное снятие и пополнение"
        />
        <FormControlLabel
          control={(
            <Switch name="isCapitalization" checked={isCapitalization} onChange={handleChange} />
          )}
          label="Капитализация процентов"
        />
      </FormGroup>
    </FormControl>
  );
};
