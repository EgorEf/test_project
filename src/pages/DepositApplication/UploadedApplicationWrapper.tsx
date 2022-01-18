import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { useGetApplicationByIdQuery } from '../../services/applicationsApi';
import { DepositApplication } from './components/DepositApplication';

export const UploadedApplicationWrapper: FC = () => {
  const { applicationId } = useParams();

  const { data: application } = useGetApplicationByIdQuery(applicationId);

  if (!application) return null;

  return <DepositApplication application={application} isNew={false} />;
};
