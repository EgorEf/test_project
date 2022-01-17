import { FC } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { TextLine } from './TextLine';
import { TApplication } from '../../../app/types';
import { getCurrencySymbol } from '../../../helpers/currencySymbols';

type PropType = {
  applicationData: TApplication
};

export const MainInfo: FC<PropType> = ({ applicationData }) => {
  const {
    name,
    createdAt,
    closedAt,
    description,
    amount,
    currency,
    income,
    rate
  } = applicationData;
  const rateValue = `${rate} %`;
  const currencySymbol = getCurrencySymbol(currency);
  const amountValue = `${amount} ${currencySymbol}`;
  const incomeValue = `${income} ${currencySymbol}`;

  return (
    <Box mt={2}>
      <Typography variant="h6">
        {`Депозит "${name}"`}
      </Typography>
      <Typography variant="h6">
        {description}
      </Typography>
      <Box sx={{ mt: '5px' }}>
        <TextLine name="Дата открытия" value={createdAt} />
        <TextLine name="Дата закрытия" value={closedAt} />
        <TextLine name="Сумма" value={amountValue} />
        <TextLine name="Доход" value={incomeValue} />
        <TextLine name="Ставка, годовых" value={rateValue} />
      </Box>
    </Box>
  );
};
