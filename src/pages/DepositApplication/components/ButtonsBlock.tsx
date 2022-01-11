import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { ReturnTypeFunc, TApplicationStatus } from '../../../app/types';

type PropType = {
  status: TApplicationStatus,
  isDisabled: boolean
};

export const ButtonsBlock = ({ status, isDisabled }: PropType): ReturnTypeFunc => (
  <Stack direction="row" spacing={4} mt={5}>
    {status === 'draft' && (
      <>
        <Button variant="outlined" disabled={isDisabled} type="submit">Сохранить</Button>
        <Button variant="contained" disabled={isDisabled} type="submit">Отправить</Button>
      </>
    )}
  </Stack>
);
