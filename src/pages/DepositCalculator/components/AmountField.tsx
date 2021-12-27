import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import InputAdornment from '@mui/material/InputAdornment';
import { OutlinedInputWithoutArrows } from './OutlinedInputWithoutArrows';
import { ReturnTypeFunc, PropsType } from '../../../app/types';

type MappedObjWithSymbols = {
  [key: string]: string;
};

const mappedSymbolsByCurrency: MappedObjWithSymbols = {
  rub: '₽',
  usd: '$'
};

type TAmountProps = PropsType & { currency: string };

export const AmountField = ({
  value,
  currency,
  handleChange
}: TAmountProps): ReturnTypeFunc => {
  const currencySymbol = mappedSymbolsByCurrency[currency];
  const step = (currency === 'rub') ? 1000 : 100;
  const fieldValue = (value === 0) ? '' : value;

  return (
    <FormControl>
      <FormLabel component="legend">Сумма</FormLabel>
      <OutlinedInputWithoutArrows
        name="amount"
        type="number"
        value={fieldValue}
        onChange={handleChange}
        placeholder="Введите сумму депозита"
        inputProps={{ min: 0, step }}
        sx={{ mt: '9px' }}
        endAdornment={(
          <InputAdornment position="start">
            {currencySymbol}
          </InputAdornment>
        )}
      />
    </FormControl>
  );
};
