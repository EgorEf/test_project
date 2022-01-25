import { FC, useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { PageHeader } from '../../components/PageHeader';
import { CalculatorForm } from './components/CalculatorForm';
import { Products } from './components/Products';
import { Loader } from '../../components/Loader';
import { useLazyGetProductsQuery } from '../../services/productsApi';
import { TProduct, TProductRequest } from '../../app/types/productTypes';

export const DepositCalculator: FC = () => {
  const [loadProducts, { isFetching }] = useLazyGetProductsQuery();

  const [products, setProducts] = useState<TProduct[] | null>(null);

  const getProducts = async (productRequest: TProductRequest) => {
    await loadProducts(productRequest)
      .unwrap()
      .then((productsList) => setProducts(productsList));
  };

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
              : <Products products={products} />
          }
        </Grid>
      </Grid>
    </Box>
  );
};
