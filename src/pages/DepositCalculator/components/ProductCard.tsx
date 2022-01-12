import { useNavigate } from 'react-router-dom';
import { grey } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { CardHeader } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { getCurrencySymbol } from '../../../helpers/currencySymbols';
import { getNewDepositApplicationPath } from '../../../routes/routes';
import { ReturnTypeFunc, Product } from '../../../app/types';

type PropType = {
  productData: Product
};

const CustomCard = styled(Card)`
  border-radius: 10px;
  box-shadow: 0px 0px 8px 4px rgba(0, 0, 0, 0.06);
`;

const CustomCardContent = styled(CardContent)`
  padding: 0px;
  &:last-child {
    padding: 0px;
  }
`;

const getPeriodView = ([start, end]: number[]): string => {
  if (start === end) {
    const result = `${start} день`;
    return result;
  }
  const result = `${start}-${end} дней`;
  return result;
};

const getIncomeView = (income: number, currency: string): string => (
  `${income} ${getCurrencySymbol(currency)}`
);

const getRateView = (rate: number): string => `${rate} %`;

export const ProductCard = ({ productData }: PropType): ReturnTypeFunc => {
  const {
    id,
    name,
    description,
    currency,
    rate,
    period,
    income
  } = productData;

  const navigate = useNavigate();

  const handleClick = () => {
    const path = getNewDepositApplicationPath(id);
    navigate(path);
  };

  return (
    <CustomCard sx={{ p: '20px' }}>
      <CardHeader
        title={name}
        subheader={description}
        titleTypographyProps={{ variant: 'h6' }}
        sx={{ p: '0px 0px 15px 0px' }}
      />
      <CustomCardContent>
        <Stack direction="row" justifyContent="space-between" flexWrap="wrap">
          <Stack direction="row" spacing={3}>
            <Box>
              <Typography variant="body1" sx={{ color: grey[500] }}>Ставка годовых</Typography>
              <Typography variant="body1" sx={{ fontWeight: 500 }}>{getRateView(rate)}</Typography>
            </Box>
            <Box>
              <Typography variant="body1" sx={{ color: grey[500] }}>Доход</Typography>
              <Typography variant="body1" sx={{ fontWeight: 500 }}>{getIncomeView(income, currency)}</Typography>
            </Box>
            <Box>
              <Typography variant="body1" sx={{ color: grey[500] }}>Срок</Typography>
              <Typography variant="body1" sx={{ fontWeight: 500 }}>{getPeriodView(period)}</Typography>
            </Box>
          </Stack>
          <CardActions sx={{ px: '0px' }}>
            <Button variant="contained" onClick={handleClick}>Перейти к оформлению</Button>
          </CardActions>
        </Stack>
      </CustomCardContent>
    </CustomCard>
  );
};
