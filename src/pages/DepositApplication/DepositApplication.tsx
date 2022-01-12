import { SyntheticEvent, useState, useEffect } from 'react';
import {
  useParams,
  useLocation,
  useNavigate,
  Navigate
} from 'react-router-dom';
import Box from '@mui/material/Box';
import { useGetApplication, useAppSelector as useSelector } from '../../app/hooks';
import { selectProduct } from '../DepositCalculator/productsSlice';
import { selectCurrentUser } from '../Auth/authSlice';
import { ReturnTypeFunc, TApplication } from '../../app/types';
import { NavigationLinkBack } from './components/NavigationLinkBack';
import { Header } from './components/Header';
import { MainInfo } from './components/MainInfo';
import { OptionsInfo } from './components/OptionsInfo';
import { BillInfo } from './components/BillInfo';
import { ClientInfo } from './components/ClientInfo';
import { ButtonsBlock } from './components/ButtonsBlock';
import {
  useNewApplicationMutation,
  useUpdateApplicationMutation
} from '../../services/applicationsApi';

export const DepositApplication = (): ReturnTypeFunc => {
  const { applicationId, productId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const currentUser = useSelector(selectCurrentUser);
  const selectedProduct = useSelector(selectProduct(Number(productId)));
  const isNew = (productId && !applicationId);

  const [application, setApplication] = useState<TApplication | null | undefined>(null);
  const [submitAction, setSubmitAction] = useState(null);

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

  const handleSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();

    if (submitAction === 'save' || isNew) {
      await addNewApplication(application).unwrap();
    }

    if (submitAction === 'send') {
      const updatedApplication: TApplication = { ...application, status: 'inProcessing' };
      await updateApplication(updatedApplication).unwrap();
      setApplication(updatedApplication);
    }
    navigate('/depositList');
  };

  const isDisabledButton = !billNum || isLoadingAdding || isLoadingUpdate;

  return (
    <Box component="form" onSubmit={handleSubmit}>
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
      <ButtonsBlock
        status={status}
        setSubmitAction={setSubmitAction}
        isDisabled={isDisabledButton}
      />
    </Box>
  );
};
