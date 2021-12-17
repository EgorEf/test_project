import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import Tooltip from '@mui/material/Tooltip';
import RadioGroup from '@mui/material/RadioGroup';
import Radio from '@mui/material/Radio';
import { ReturnTypeFunc, PropsType } from '../../../app/types';

export const CurrencyField = ({ value, handleChange }: PropsType): ReturnTypeFunc => (
  <FormControl component="fieldset">
    <FormLabel component="legend">Валюта</FormLabel>
    <RadioGroup row name="currency" onChange={handleChange} value={value}>
      <Tooltip title="Рубли" placement="bottom-start">
        <FormControlLabel value="rub" control={<Radio />} label="₽" />
      </Tooltip>
      <Tooltip title="Доллары США" placement="bottom-start">
        <FormControlLabel value="usd" control={<Radio />} label="$" />
      </Tooltip>
    </RadioGroup>
  </FormControl>
);
