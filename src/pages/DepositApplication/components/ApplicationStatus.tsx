import { FC } from 'react';
import Chip from '@mui/material/Chip';
import { TStatusPropType } from '../../../app/types/applicationTypes';

type MappedObject = {
  [key: string]: {
    label: string,
    color?: 'secondary' | 'primary' | undefined,
    variant?: 'filled' | 'outlined' | undefined
  }
};

const mappedChipPropsByStatus: MappedObject = {
  draft: { label: 'Черновик' },
  inProcessing: {
    label: 'В обработке',
    color: 'primary',
    variant: 'outlined'
  },
  open: {
    label: 'Открыт',
    color: 'primary'
  }
};

export const ApplicationStatus: FC<TStatusPropType> = ({ status }) => {
  const chipProps = mappedChipPropsByStatus[status];
  return <Chip {...chipProps} />;
};
