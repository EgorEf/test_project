import { FC } from 'react';
import {
  grey,
  blue,
  red,
  green
} from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import BadgeUnstyled from '@mui/base/BadgeUnstyled';
import { Status } from '../../../helpers/Status';
import { TApplicationStatus } from '../../../app/types/applicationTypes';

const CustomBadge = styled(BadgeUnstyled)`
  position: relative;
  padding-left: 15px;

  & .MuiBadge-anchorOriginTopLeft {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(50%, -50%);
    transform-origin: 100% 0;
  }

  .MuiBadge-dot {
    padding: 0;
    z-index: auto;
    min-width: 7px;
    width: 7px;
    height: 7px;
    border-radius: 100%;
    box-shadow: 0 0 0 1px #fff;

    &.color-${Status.DRAFT}-status {
      background: ${grey[500]}
    }
    &.color-${Status.IN_PROCESSING}-status {
      background: ${blue[500]}
    }
    &.color-${Status.REJECT}-status {
      background: ${red[500]}
    }
    &.color-${Status.OPEN}-status {
      background: ${green[500]}
    }
  }
`;

type TPropType = {
  status: TApplicationStatus,
  label: string
};

export const BadgeStatus: FC<TPropType> = ({ status, label }) => {
  const className = {
    dot: `color-${status}-status`
  };

  return (
    <Box>
      <CustomBadge
        variant="dot"
        classes={className}
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
      >
        <Box component="span">{label}</Box>
      </CustomBadge>
    </Box>
  );
};
