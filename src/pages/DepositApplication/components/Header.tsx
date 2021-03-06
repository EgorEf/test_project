import { FC } from 'react';
import Stack from '@mui/material/Stack';
import { ApplicationStatus } from './ApplicationStatus';
import { PageHeader } from '../../../components/PageHeader';
import { TStatusPropType } from '../../../app/types/applicationTypes';

export const Header: FC<TStatusPropType> = ({ status }) => (
  <Stack direction="row" alignItems="center" spacing={3}>
    <PageHeader text="Заявление на размещение в депозит" />
    <ApplicationStatus status={status} />
  </Stack>
);
