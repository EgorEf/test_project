import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import { ReturnTypeFunc, PropsType } from '../../../app/types';

export const AmountField = ({
  value,
  currencySymbol,
  handleChange
}: PropsType): ReturnTypeFunc => (
  <FormControl>
    <FormLabel component="legend">Сумма</FormLabel>
    <OutlinedInput
      name="amount"
      type="number"
      value={value}
      onChange={handleChange}
      placeholder="Введите сумму депозита"
      sx={{ mt: '9px' }}
      startAdornment={(
        <InputAdornment position="start">
          {currencySymbol}
        </InputAdornment>
      )}
    />
  </FormControl>
);
