import { FC } from 'react';
import Typography from '@mui/material/Typography';

type PropType = {
  text: string,
};

export const PageSubtitle: FC<PropType> = ({ text }) => <Typography variant="h6">{text}</Typography>;
