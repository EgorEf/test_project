import { FC } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { TApplicationStatus } from '../../../app/types';

type TButton = 'save' | 'send';

type PropType = {
  status: TApplicationStatus,
  setSubmitAction: any,
  isDisabled: boolean
};

export const ButtonsBlock: FC<PropType> = ({ status, setSubmitAction, isDisabled }) => {
  const handleClick = (type: TButton) => () => setSubmitAction(type);
  return (
    <Stack direction="row" spacing={4} mt={5}>
      {status === 'draft' && (
        <>
          <Button variant="outlined" onClick={handleClick('save')} disabled={isDisabled} type="submit">Сохранить</Button>
          <Button variant="contained" onClick={handleClick('send')} disabled={isDisabled} type="submit">Отправить</Button>
        </>
      )}
    </Stack>
  );
};
