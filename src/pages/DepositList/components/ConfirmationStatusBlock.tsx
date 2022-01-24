import { FC } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import { TApplication, TApplicationStatus, Statuses } from '../../../app/types/applicationTypes';
import { useUpdateApplicationMutation } from '../../../services/applicationsApi';

type TPropType = {
  dataRow: TApplication
};

export const ConfirmationStatusBlock: FC<TPropType> = ({ dataRow }) => {
  const [updateApplication] = useUpdateApplicationMutation();

  const handleClick = (newStatus: TApplicationStatus) => () => {
    const updatedApplication = { ...dataRow, status: newStatus };
    updateApplication(updatedApplication).unwrap();
  };

  return (
    <Stack spacing={1} direction="row">
      <Button variant="text" onClick={handleClick(Statuses.OPEN)}>
        <CheckIcon color="success" />
      </Button>
      <Button variant="text" onClick={handleClick(Statuses.REJECT)}>
        <CloseIcon color="error" />
      </Button>
    </Stack>
  );
};
