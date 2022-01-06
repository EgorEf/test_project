import Chip from '@mui/material/Chip';
import { ReturnTypeFunc, StatusPropType } from '../../../app/types';

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

export const ApplicationStatus = ({ status }: StatusPropType): ReturnTypeFunc => {
  const chipProps = mappedChipPropsByStatus[status];
  return <Chip {...chipProps} />;
};
