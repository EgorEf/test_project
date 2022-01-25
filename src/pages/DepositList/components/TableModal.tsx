import {
  FC,
  useState,
  Dispatch,
  SetStateAction
} from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import { blue } from '@mui/material/colors';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { TextLine } from '../../DepositApplication/components/TextLine';
import { TApplication } from '../../../app/types/applicationTypes';
import { routes } from '../../../routes';

const ModalContent = styled(Box)`
  position: absolute;
  min-width: 400px;
  top: 50%;
  left: 50%;
  border-radius: 5px;
  padding: 15px;
  transform: translate(-50%, -50%);
  background: white;
`;

const CustomLink = styled(Link)({
  display: 'flex',
  alignItems: 'center',
  color: blue[700],
  textDecoration: 'none'
});

type TPropType = {
  data: TApplication,
  setSelectedRow: Dispatch<SetStateAction<TApplication | null>>
};

export const TableModal: FC<TPropType> = ({ data, setSelectedRow }) => {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
    setSelectedRow(null);
  };

  const {
    id,
    name,
    description,
    rate,
    options: {
      isPartial, isEarlyRepayment, isCapitalization
    }
  } = data;

  const rateValue = `${rate} %`;

  const getOptionValue = (option: boolean) => ((option) ? 'Да' : 'Нет');

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <ModalContent tabIndex={undefined}>
        <Typography id="modal-modal-title" variant="h6">
          {`Депозит "${name}"`}
        </Typography>
        <Typography id="modal-modal-description">
          {description}
        </Typography>
        <Box mt={1}>
          <TextLine name="Годовая ставка" value={rateValue} />
          <TextLine name="Досрочное расторжение" value={getOptionValue(isEarlyRepayment)} />
          <TextLine name="Частичное снятие и пополнение" value={getOptionValue(isPartial)} />
          <TextLine name="Капитализация" value={getOptionValue(isCapitalization)} />
        </Box>
        <Box mt={2}>
          <CustomLink to={routes.DEPOSIT_APPLICATION.BY_ID(id)}>
            Перейти
            <ArrowForwardIcon color="primary" />
          </CustomLink>
        </Box>
      </ModalContent>
    </Modal>
  );
};
