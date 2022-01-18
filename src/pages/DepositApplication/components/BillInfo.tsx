import { FC, SetStateAction, Dispatch } from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { PageSubtitle } from '../../../components/PageSubtitle';
import { TextLine } from './TextLine';
import { TApplication, TApplicationStatus } from '../../../app/types/applicationTypes';
import { TBill } from '../../../app/types/billTypes';
import { Status } from '../../../app/enums';
import { useGetBillsQuery } from '../../../services/billsApi';

type PropType = {
  status: TApplicationStatus,
  userId: number,
  currency: string,
  billNum: string
  setApplication: Dispatch<SetStateAction<TApplication>>
};

export const BillInfo: FC<PropType> = ({
  status,
  userId,
  currency,
  billNum,
  setApplication
}) => {
  const { data } = useGetBillsQuery({ userId, currency });

  const renderItem = ({ id, numBill }: TBill) => (
    <MenuItem key={id} value={numBill}>{numBill}</MenuItem>
  );

  const handleChange = (event: SelectChangeEvent) => {
    const selectedValue: string = event.target.value;
    setApplication((prevState): TApplication => ({ ...prevState, billNum: selectedValue }));
  };

  return (
    <Box mt={2}>
      <PageSubtitle text="Способ пополнения и возврата средств" />
      {
        (status === Status.DRAFT)
          ? (
            <Box width="300px" py="14px">
              <FormControl fullWidth>
                <InputLabel id="select-label">Выберите счет</InputLabel>
                <Select
                  labelId="select-label"
                  value={billNum}
                  label="Выберите счет"
                  onChange={handleChange}
                >
                  {data?.map(renderItem)}
                </Select>
              </FormControl>
            </Box>
          )
          : <TextLine name="Номер счёта" value={billNum} />
      }
      <TextLine name="Счет для возврата средств" value="Совпадает со счетом пополнения" />
      <TextLine name="Счет для выплаты процентов" value="Совпадает со счетом пополнения" />
    </Box>
  );
};
