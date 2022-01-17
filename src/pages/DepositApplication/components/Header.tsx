import { FC } from 'react';
import Stack from '@mui/material/Stack';
import { ApplicationStatus } from './ApplicationStatus';
import { PageHeader } from '../../../components/PageHeader';
import { StatusPropType } from '../../../app/types';

export const Header: FC<StatusPropType> = ({ status }) => (
  <Stack direction="row" alignItems="center" spacing={3}>
    <PageHeader text="Заявление на размещение в депозит" />
    <ApplicationStatus status={status} />
  </Stack>
);
