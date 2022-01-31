import { FC } from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { grey } from '@mui/material/colors';

type TPropType = {
  name: string,
  value: string | number | null
};

export const TextLine: FC<TPropType> = ({ name, value, children }) => (
  <Stack direction="row" spacing={3} py={1} alignItems="center">
    <Typography variant="body2" minWidth="25%" maxWidth="60%" color={grey[600]}>{name}</Typography>
    {
      value
        ? <Typography variant="body2">{value}</Typography>
        : children
    }
  </Stack>
);
