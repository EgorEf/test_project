import { FC } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import FindReplaceIcon from '@mui/icons-material/FindReplace';
import Typography from '@mui/material/Typography';
import { grey } from '@mui/material/colors';

const CustomBox = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const HelpText: FC = () => (
  <CustomBox>
    <Typography variant="body2" sx={{ color: grey[400], mr: 1 }}>
      Подходящих продуктов не найдено, попробуйте изменить параметры.
    </Typography>
    <FindReplaceIcon color="disabled" />
  </CustomBox>
);
