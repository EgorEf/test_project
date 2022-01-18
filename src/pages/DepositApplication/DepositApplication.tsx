import { FC, useState, useEffect } from 'react';
import {
  useParams,
  useLocation,
  useNavigate,
  Navigate
} from 'react-router-dom';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Status } from '../../app/enums';
import {
  useGetApplication,
  useGetCurrentUser,
  useGetSelectedProduct
} from '../../app/hooks';
import { TApplication } from '../../app/types/applicationTypes';
import { NavigationLinkBack } from './components/NavigationLinkBack';
import { Header } from './components/Header';
import { MainInfo } from './components/MainInfo';
import { OptionsInfo } from './components/OptionsInfo';
import { BillInfo } from './components/BillInfo';
import { ClientInfo } from './components/ClientInfo';
import {
  useNewApplicationMutation,
  useUpdateApplicationMutation
} from '../../services/applicationsApi';

export const DepositApplication: FC = () => {
  const { applicationId, productId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const currentUser = useGetCurrentUser();
  const selectedProduct = useGetSelectedProduct(Number(productId));

  const isNew = (productId && !applicationId);

  const [application, setApplication] = useState<TApplication | null | undefined>(undefined);

  useEffect(() => {
    const applicationTemplate = useGetApplication(
      Number(applicationId),
      Number(productId),
      currentUser,
      selectedProduct
    );

    setApplication(applicationTemplate);
    return () => setApplication(null);
  }, [applicationId, productId]);

  const [addNewApplication, { isLoading: isLoadingAdding }] = useNewApplicationMutation();
  const [updateApplication, { isLoading: isLoadingUpdate }] = useUpdateApplicationMutation();

  if (isNew && !selectedProduct) {
    const from = location.state?.from?.pathname || '/';
    return <Navigate to={from} state={{ from: location }} />;
  }

  if (!application) return null;

  const {
    billNum,
    status,
    options,
    currency,
    userId
  }: TApplication = application;

  const saveApplication = async () => {
    await addNewApplication(application).unwrap();
    navigate('/depositList');
  };

  const sendApplication = async () => {
    const updatedApplication = { ...application, status: 'inProcessing' };

    if (isNew) {
      await addNewApplication(updatedApplication).unwrap();
    } else {
      await updateApplication(updatedApplication).unwrap();
    }

    navigate('/depositList');
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
