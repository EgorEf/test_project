import { FC } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { TOptions } from '../../../app/types/applicationTypes';
import { TextLine } from './TextLine';

type PropType = { options: TOptions };

type MappedObjType = {
  [key: string]: string
};

const mappedOptionsName: MappedObjType = {
  isEarlyRepayment: 'Досрочное расторжение',
  isPartial: 'Частичное снятие и пополнение',
  isCapitalization: 'Капитализация процентов'
};

const getPreparedOptions = (options: TOptions) => {
  const optionsEntries = Object.entries(options);
  return optionsEntries.map(([key, value]) => {
    const name = mappedOptionsName[key];
    const humanValue = (value) ? 'Да' : 'Нет';
    return [name, humanValue];
  });
};

export const OptionsInfo: FC<PropType> = ({ options }) => {
  const preparedOptions = getPreparedOptions(options);

  return (
    <Box mt={2}>
      <Typography variant="h6">
        Дополнительные опции
      </Typography>
      <Box sx={{ mt: '5px' }}>
        {
          preparedOptions.map(([name, value]) => (
            <TextLine name={name} value={value} key={name} />
          ))
        }
      </Box>
    </Box>
  );
};
