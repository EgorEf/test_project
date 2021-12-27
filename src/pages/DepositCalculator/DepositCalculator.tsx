import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import type { ReturnTypeFunc } from '../../app/types';
import { CalculatorForm } from './components/CalculatorForm';
import { Products } from './components/Products';

export const DepositCalculator = (): ReturnTypeFunc => (
  <Box>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h4">Депозитный калькулятор</Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box mb={3}>
          <Typography variant="h6" sx={{ color: 'text.secondary' }}>
            Введите параметры и подберите подходящий продукт.
          </Typography>
        </Box>
        <CalculatorForm />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Box mb={3}>
          <Typography variant="h6" sx={{ color: 'text.secondary' }}>
            Список доступных продуктов:
          </Typography>
        </Box>
        <Products />
      </Grid>
    </Grid>
  </Box>
);
