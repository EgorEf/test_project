import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { PageSubtitle } from '../../../components/PageSubtitle';
import { TextLine } from './TextLine';
import {
  ReturnTypeFunc,
  TApplication,
  TBill,
  TApplicationStatus
} from '../../../app/types';
import { useGetBillsQuery } from '../../../services/billsApi';

type PropType = {
  status: TApplicationStatus,
  userId: number,
  currency: string,
  billNum: string
  setApplication: any
};

export const BillInfo = ({
  status,
  userId,
  currency,
  billNum,
  setApplication
}: PropType): ReturnTypeFunc => {
  const { data } = useGetBillsQuery({ userId, currency });

  const renderItem = ({ id, numBill }: TBill) => (
    <MenuItem key={id} value={numBill}>{numBill}</MenuItem>
  );

  const handleChange = (event: SelectChangeEvent) => {
    const selectedValue: string = event.target.value;
    setApplication((prevState: TApplication): TApplication => (
      { ...prevState, billNum: selectedValue }
    ));
  };

  return (
    <Box mt={2}>
      <PageSubtitle text="Способ пополнения и возврата средств" />
      {
        (status === 'draft')
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
