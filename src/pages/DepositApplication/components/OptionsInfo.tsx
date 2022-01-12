import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import type { Options, ReturnTypeFunc } from '../../../app/types';
import { TextLine } from './TextLine';

type PropType = { options: Options };

type MappedObjType = {
  [key: string]: string
};

const mappedOptionsName: MappedObjType = {
  isEarlyRepayment: 'Досрочное расторжение',
  isPartial: 'Частичное снятие и пополнение',
  isCapitalization: 'Капитализация процентов'
};

const getPreparedOptions = (options: Options) => {
  const optionsEntries = Object.entries(options);
  return optionsEntries.map(([key, value]) => {
    const name = mappedOptionsName[key];
    const humanValue = (value) ? 'Да' : 'Нет';
    return [name, humanValue];
  });
};

export const OptionsInfo = ({ options }: PropType): ReturnTypeFunc => {
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
