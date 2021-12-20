import OutlinedInput from '@mui/material/OutlinedInput';
import { styled } from '@mui/material/styles';

export const OutlinedInputWithoutArrows = styled(OutlinedInput)`
  max-width: 300px;
  .MuiOutlinedInput-input {
    &::-webkit-outer-spin-button, &::-webkit-inner-spin-button {
      -webkit-appearance: none;
    }
  }
`;
