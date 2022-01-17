import { FC } from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { grey } from '@mui/material/colors';

type PropType = {
  name: string,
  value: string | number
};

export const TextLine: FC<PropType> = ({ name, value }) => (
  <Stack direction="row" spacing={3} py={1}>
    <Typography variant="body2" minWidth="25%" maxWidth="60%" color={grey[600]}>{name}</Typography>
    <Typography variant="body2">{value}</Typography>
  </Stack>
);
