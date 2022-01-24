import { FC } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { TextLine } from './TextLine';
import { useGetCurrentUser } from '../../../app/hooks';

export const ClientInfo: FC = () => {
  const currentUser = useGetCurrentUser();
  if (!currentUser) return null;

  const { info } = currentUser;
  if (!info) return null;

  return (
    <Box mt={2}>
      <Typography variant="h6">
        Информация о клиенте
      </Typography>
      <Box>
        <TextLine name="Наименование клиента" value={info.name} />
        <TextLine name="ИНН" value={info.taxNumber} />
      </Box>
    </Box>
  );
};
