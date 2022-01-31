import { FC, SetStateAction, Dispatch } from 'react';
import { grey } from '@mui/material/colors';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Typography from '@mui/material/Typography';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { PageSubtitle } from '../../../components/PageSubtitle';
import { TextLine } from './TextLine';
import { TApplication, TApplicationStatus, Statuses } from '../../../app/types/applicationTypes';
import { TBill } from '../../../app/types/billTypes';
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
        (status === Statuses.DRAFT)
          ? (
            <TextLine name="Номер счёта" value={null}>
              <Box width="300px">
                <FormControl fullWidth>
                  <Select
                    displayEmpty
                    labelId="select-label"
                    value={billNum}
                    input={<OutlinedInput />}
                    renderValue={(selected) => {
                      if (selected.length === 0) {
                        return <Typography color={grey[500]}>Выберите счёт</Typography>;
                      }
                      return selected;
                    }}
                    size="small"
                    onChange={handleChange}
                    inputProps={{ 'aria-label': 'Without label' }}
                  >
                    <MenuItem disabled value="">
                      <em>Выберите счёт</em>
                    </MenuItem>
                    {data?.map(renderItem)}
                  </Select>
                </FormControl>
              </Box>
            </TextLine>
          )
          : <TextLine name="Номер счёта" value={billNum} />
      }
      <TextLine name="Счет для возврата средств" value="Совпадает со счетом пополнения" />
      <TextLine name="Счет для выплаты процентов" value="Совпадает со счетом пополнения" />
    </Box>
  );
};
