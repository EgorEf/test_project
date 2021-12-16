import Stack from '@mui/material/Stack';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import RadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';
import Tooltip from '@mui/material/Tooltip';
import OutlinedInput from '@mui/material/OutlinedInput';
import Radio from '@mui/material/Radio';
import Switch from '@mui/material/Switch';

export const CalculatorForm = () => (
  <Stack component="form" spacing={3}>
    <FormControl component="fieldset">
      <FormLabel component="legend">Валюта</FormLabel>
      <RadioGroup row aria-label="currency" name="currency" defaultValue="rub">
        <Tooltip title="Рубли" placement="bottom-start">
          <FormControlLabel value="rub" control={<Radio />} label="₽" />
        </Tooltip>
        <Tooltip title="Доллары США" placement="bottom-start">
          <FormControlLabel value="usd" control={<Radio />} label="$" />
        </Tooltip>
      </RadioGroup>
    </FormControl>
    <FormControl>
      <FormLabel component="legend">Сумма</FormLabel>
      <OutlinedInput
        name="amount"
        type="number"
        placeholder="Введите сумму депозита"
        sx={{ mt: '9px' }}
      />
    </FormControl>
    <FormControl component="fieldset">
      <FormLabel component="legend">Срок</FormLabel>
      <RadioGroup row aria-label="term" defaultValue="day">
        <FormControlLabel value="day" control={<Radio />} label="Дни" />
        <FormControlLabel value="mounth" control={<Radio />} label="Месяцы" />
        <FormControlLabel value="year" control={<Radio />} label="Года" />
      </RadioGroup>
      <OutlinedInput
        name="term"
        type="number"
        placeholder="Введите срок депозита"
      />
    </FormControl>
    <FormControl>
      <FormLabel component="legend">Опции</FormLabel>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch name="early" />
          }
          label="Досрочное расторжение"
        />
        <FormControlLabel
          control={
            <Switch name="partial" />
          }
          label="Частичное снятие и пополнение"
        />
        <FormControlLabel
          control={
            <Switch name="capitalization" />
          }
          label="Капитализация процентов"
        />
      </FormGroup>
    </FormControl>
  </Stack>
);
