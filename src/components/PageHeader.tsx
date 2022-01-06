import Typography from '@mui/material/Typography';
import { ReturnTypeFunc } from '../app/types';

type PropType = { text: string };

export const PageHeader = ({ text }: PropType): ReturnTypeFunc => (
  <Typography variant="h4">{text}</Typography>
);
