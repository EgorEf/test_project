import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { TextLine } from './TextLine';
import { useAppSelector as useSelector } from '../../../app/hooks';
import { selectCurrentUser } from '../../Auth/authSlice';
import type { ReturnTypeFunc } from '../../../app/types';

export const ClientInfo = (): ReturnTypeFunc => {
  const currentUser = useSelector(selectCurrentUser);
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
