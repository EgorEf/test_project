import { FC } from 'react';
import { useParams, useLocation, Navigate } from 'react-router-dom';
import { useGetApplicationTemplate } from '../../app/hooks';
import { DepositApplication } from './components/DepositApplication';

export const NewApplicationWrapper: FC = () => {
  const { productId } = useParams();
  const location = useLocation();

  const application = useGetApplicationTemplate(Number(productId));

  if (!application) {
    const from = location.state?.from?.pathname || '/';
    return <Navigate to={from} state={{ from: location }} />;
  }

  return <DepositApplication application={application} isNew />;
};
