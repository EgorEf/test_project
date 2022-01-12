import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { TextLine } from './TextLine';
import { ReturnTypeFunc, TApplication } from '../../../app/types';

type PropType = {
  applicationData: TApplication
};

export const MainInfo = ({ applicationData }: PropType): ReturnTypeFunc => {
  const {
    name,
    description,
    rate
  } = applicationData;
  const rateValue = `${rate} %`;

  return (
    <Box mt={2}>
      <Typography variant="h6">
        {`Депозит "${name}"`}
      </Typography>
      <Typography variant="h6">
        {description}
      </Typography>
      <Box sx={{ mt: '5px' }}>
        <TextLine name="Срок" value="" />
        <TextLine name="Ставка, годовых" value={rateValue} />
      </Box>
    </Box>
  );
};
