import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import { CardHeader } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { selectProducts } from '../productsSlice';
import { useAppSelector as useSelector } from '../../../app/hooks';
import { ReturnTypeFunc } from '../../../app/types';

export const Products = (): ReturnTypeFunc => {
  const accessedProducts = useSelector(selectProducts);

  const renderCardProduct = (product: any) => {
    const {
      id,
      name,
      currency,
      income,
      rate
    } = product;

    return (
      <Card key={id} variant="outlined">
        <CardHeader title={name} titleTypographyProps={{ variant: 'h5' }}>
          {name}
        </CardHeader>
        <CardContent>
          <Typography variant="body1">{`Валюта: ${currency}`}</Typography>
          <Typography variant="body1">{`Ставка годовых: ${rate}`}</Typography>
          <Typography variant="body1">{`Доход: ${income}`}</Typography>
        </CardContent>
        <CardActions sx={{ pl: '16px', pb: '16px' }}>
          <Button variant="contained">Оформить</Button>
        </CardActions>
      </Card>
    );
  };

  return (
    <Stack>
      {accessedProducts.map(renderCardProduct)}
    </Stack>
  );
};
