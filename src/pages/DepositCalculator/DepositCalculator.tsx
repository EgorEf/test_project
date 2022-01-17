import { FC } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { PageHeader } from '../../components/PageHeader';
import { CalculatorForm } from './components/CalculatorForm';
import { Products } from './components/Products';
import { Loader } from './components/Loader';
import { useLazyGetProductsQuery } from '../../services/productsApi';

export const DepositCalculator: FC = () => {
  const [getProducts, { isFetching }] = useLazyGetProductsQuery();

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <PageHeader text="Депозитный калькулятор" />
        </Grid>
        <Grid item xs={12} sm={5}>
          <Box mb={3}>
            <Typography variant="h6" sx={{ color: 'text.secondary' }}>
              Введите параметры и подберите подходящий продукт.
            </Typography>
          </Box>
          <CalculatorForm getProducts={getProducts} />
        </Grid>
        <Grid item xs={12} sm={7}>
          <Box mb={3}>
            <Typography variant="h6" sx={{ color: 'text.secondary' }}>
              Список доступных продуктов:
            </Typography>
          </Box>
          {
            isFetching
              ? <Loader />
              : <Products />
          }
        </Grid>
      </Grid>
    </Box>
  );
};
