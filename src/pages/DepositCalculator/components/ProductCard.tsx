import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import { CardHeader } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { ReturnTypeFunc, Product } from '../../../app/types';

type PropType = {
  productData: Product
};

const CustomCard = styled(Card)`
  border-radius: 10px;
  box-shadow: 0px 0px 8px 4px rgba(0, 0, 0, 0.06);
`;

export const ProductCard = ({ productData }: PropType): ReturnTypeFunc => {
  const {
    id,
    name,
    description,
    currency,
    rate,
    income
  } = productData;

  return (
    <CustomCard>
      <CardHeader title={name} subheader={description} titleTypographyProps={{ variant: 'h6' }} />
      <CardContent>
        <Typography variant="body1">{`Валюта: ${currency}`}</Typography>
        <Typography variant="body1">{`Ставка годовых: ${rate}`}</Typography>
        <Typography variant="body1">{`Доход: ${income}`}</Typography>
      </CardContent>
      <CardActions sx={{ pl: '16px', pb: '16px' }}>
        <Button variant="contained">Перейти к оформлению</Button>
      </CardActions>
    </CustomCard>
  );
};
