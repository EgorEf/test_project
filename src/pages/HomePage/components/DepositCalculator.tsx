import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import type { ReturnTypeFunc } from '../../../app/types';
import { CalculatorForm } from './CalculatorForm';

const Block = styled('div')`
  border: 1px solid black;
  height: 100%;
`;

export const DepositCalculator = (): ReturnTypeFunc => (
  <Box>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h5">Депозитный калькулятор</Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="subtitle1" mt={2} sx={{ color: 'text.secondary' }}>
          Введите параметры и подберите подходящий продукт.
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <CalculatorForm />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Block />
      </Grid>
    </Grid>
  </Box>
);
