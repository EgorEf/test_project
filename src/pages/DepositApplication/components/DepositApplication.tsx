import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Status } from '../../../app/Status';
import { routes } from '../../../routes';
import { TApplication } from '../../../app/types/applicationTypes';
import { NavigationLinkBack } from './NavigationLinkBack';
import { Header } from './Header';
import { MainInfo } from './MainInfo';
import { OptionsInfo } from './OptionsInfo';
import { BillInfo } from './BillInfo';
import { ClientInfo } from './ClientInfo';
import { useNewApplicationMutation, useUpdateApplicationMutation } from '../../../services/applicationsApi';

type PropType = {
  application: TApplication,
  isNew: boolean,
};

export const DepositApplication: FC<PropType> = ({ application, isNew }) => {
  const navigate = useNavigate();
  const [applicationState, setApplication] = useState<TApplication>(application);

  const [addNewApplication, { isLoading: isLoadingAdding }] = useNewApplicationMutation();
  const [updateApplication, { isLoading: isLoadingUpdate }] = useUpdateApplicationMutation();

  const {
    billNum,
    status,
    options,
    currency,
    userId
  } = applicationState;

  const saveApplication = async () => {
    await addNewApplication(application).unwrap();
    navigate(routes.DEPOSIT_LIST);
  };

  const sendApplication = async () => {
    const updatedApplication = { ...application, status: 'inProcessing' };

    if (isNew) {
      await addNewApplication(updatedApplication).unwrap();
    } else {
      await updateApplication(updatedApplication).unwrap();
    }

    navigate(routes.DEPOSIT_LIST);
  };

  const isDisabledButton = !billNum || isLoadingAdding || isLoadingUpdate;

  return (
    <Box component="form">
      <NavigationLinkBack />
      <Header status={status} />
      <MainInfo applicationData={application} />
      <OptionsInfo options={options} />
      <BillInfo
        status={status}
        userId={userId}
        currency={currency}
        billNum={(!billNum) ? '' : billNum}
        setApplication={setApplication}
      />
      <ClientInfo />
      <Stack direction="row" spacing={4} mt={5}>
        {isNew && <Button variant="outlined" onClick={saveApplication} disabled={isDisabledButton}>Сохранить</Button>}
        {(status === Status.DRAFT) && (
          <Button variant="contained" onClick={sendApplication} disabled={isDisabledButton}>Отправить</Button>
        )}
      </Stack>
    </Box>
  );
};
