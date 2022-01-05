import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { grey } from '@mui/material/colors';
import type { ReturnTypeFunc } from '../../../app/types';

type PropsType = {
  name: string,
  value: string
};

export const TextLine = ({ name, value }: PropsType): ReturnTypeFunc => (
  <Stack direction="row" spacing={3} py={1}>
    <Typography variant="body2" minWidth={25} maxWidth={70} color={grey[600]}>{name}</Typography>
    <Typography variant="body2">{value}</Typography>
  </Stack>
);
