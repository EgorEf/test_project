import { useState, ChangeEvent, FC } from 'react';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Radio from '@mui/material/Radio';
import { OutlinedInputWithoutArrows } from './OutlinedInputWithoutArrows';

type MappedObjType = {
  [key: string]: (arg: number) => string | number;
};

type MappedObjTypeWithNumberValues = {
  [key: string]: number
};

type PropType = {
  changeFormikFieldValue: (name: string, value: number | string) => void
};

const getNumberToMatch = (num: number): number => {
  const isNumBetweenFirstAndSecondDecade = (num > 10 && num < 20);
  const result = (isNumBetweenFirstAndSecondDecade) ? 0 : num % 10;
  return result;
};

const mappedIntervalNamesByLanguages: MappedObjType = {
  day: (number) => {
    const matchedNum = getNumberToMatch(number);
    if (matchedNum === 1) return 'День';
    if (matchedNum >= 2 && matchedNum <= 4) return 'Дня';
    return 'Дней';
  },
  mounth: (number) => {
    const matchedNum = getNumberToMatch(number);
    if (matchedNum === 1) return 'Месяц';
    if (matchedNum >= 2 && matchedNum <= 4) return 'Месяца';
    return 'Месяцев';
  },
  year: (number) => {
    const matchedNum = getNumberToMatch(number);
    if (matchedNum === 1) return 'Год';
    if (matchedNum >= 2 && matchedNum <= 4) return 'Года';
    return 'Лет';
  }
};

const mappedNameIntervalToAction: MappedObjType = {
  day: (number) => number,
  mounth: (number) => number * 30,
  year: (number) => number * 365
};

const mappedMaxValueByTimeInterval: MappedObjTypeWithNumberValues = {
  day: 1095,
  mounth: 36,
  year: 3
};

export const TermField: FC<PropType> = ({ changeFormikFieldValue }) => {
  const [localState, changeLocalState] = useState({ timeInterval: 'day', value: 0 });

  const handleChangeInterval = (event: ChangeEvent<HTMLInputElement>) => {
    const { target: { value: timeInterval } } = event;
    changeLocalState(() => ({ timeInterval, value: 0 }));
    changeFormikFieldValue('term', 0);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { target: { value } } = event;
    const { timeInterval } = localState;
    const newValue = Number(value);

    const convertInDays = mappedNameIntervalToAction[timeInterval];

    changeLocalState((prevState) => ({ ...prevState, value: newValue }));
    changeFormikFieldValue('term', convertInDays(newValue));
  };

  const getAdornment = mappedIntervalNamesByLanguages[localState.timeInterval];
  const max = mappedMaxValueByTimeInterval[localState.timeInterval];
  const currentValue = (localState.value === 0) ? '' : localState.value;

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Срок</FormLabel>
      <RadioGroup row value={localState.timeInterval} onChange={handleChangeInterval}>
        <FormControlLabel value="day" control={<Radio />} label="Дни" />
        <FormControlLabel value="mounth" control={<Radio />} label="Месяцы" />
        <FormControlLabel value="year" control={<Radio />} label="Годы" />
      </RadioGroup>
      <OutlinedInputWithoutArrows
        name="term"
        type="number"
        value={currentValue}
        inputProps={{ min: 0, max }}
        placeholder="0"
        endAdornment={(
          <InputAdornment position="start">
            {getAdornment(localState.value)}
          </InputAdornment>
        )}
        onChange={handleChange}
      />
    </FormControl>
  );
};
