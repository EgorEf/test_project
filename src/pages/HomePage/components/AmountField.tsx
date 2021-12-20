import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import InputAdornment from '@mui/material/InputAdornment';
import { OutlinedInputWithoutArrows } from './OutlinedInputWithoutArrows';
import { ReturnTypeFunc, PropsType } from '../../../app/types';

export const AmountField = ({
  value,
  currencySymbol,
  handleChange
}: PropsType): ReturnTypeFunc => (
  <FormControl>
    <FormLabel component="legend">Сумма</FormLabel>
    <OutlinedInputWithoutArrows
      name="amount"
      type="number"
      value={value}
      onChange={handleChange}
      placeholder="Введите сумму депозита"
      inputProps={{ min: 0 }}
      sx={{ mt: '9px' }}
      endAdornment={(
        <InputAdornment position="start">
          {currencySymbol}
        </InputAdornment>
      )}
    />
  </FormControl>
);
