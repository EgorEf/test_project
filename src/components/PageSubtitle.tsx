import Typography from '@mui/material/Typography';
import { ReturnTypeFunc } from '../app/types';

type PropType = {
  text: string,
};

export const PageSubtitle = ({ text }: PropType): ReturnTypeFunc => <Typography variant="h6">{text}</Typography>;
