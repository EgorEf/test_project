import { FC } from 'react';
import Typography from '@mui/material/Typography';

type PropType = { text: string };

export const PageHeader: FC<PropType> = ({ text }) => (
  <Typography variant="h4">{text}</Typography>
);
