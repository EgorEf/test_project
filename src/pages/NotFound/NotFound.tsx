import Typography from '@mui/material/Typography';
import type { ReturnTypeFunc } from '../../app/types';

export const NotFound = (): ReturnTypeFunc => (
  <Typography variant="h4" align="center" mb={3}>
    Ошибка! Страница не доступна или не найдена.
  </Typography>
);
