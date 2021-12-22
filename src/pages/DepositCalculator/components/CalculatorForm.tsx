import { useMemo } from 'react';
import { useFormik } from 'formik';
import debounce from 'lodash.debounce';
import Stack from '@mui/material/Stack';
import { CurrencyField } from './СurrencyField';
import { AmountField } from './AmountField';
import { TermField } from './TermField';
import { ReturnTypeFunc } from '../../../app/types';
import { OptionFields } from './OptionFields';

type MappedObjWithSymbols = {
  [key: string]: string;
};

const mappedSymbolsByCurrency: MappedObjWithSymbols = {
  rub: '₽',
  usd: '$'
};

const initialValues = {
  currency: 'rub',
  amount: 0,
  term: 0,
  isEarlyRepayment: false,
  isPartial: false,
  isCapitalization: false
};

export const CalculatorForm = (): ReturnTypeFunc => {
  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      console.log(JSON.stringify(values));
    }
  });

  const {
    values,
    handleChange,
    handleSubmit,
    setFieldValue,
    submitForm
  } = formik;

  const handleFormChange = () => {
    submitForm();
  };

  const debouncedChangeHandler = useMemo(
    () => debounce(handleFormChange, 1000),
    []
  );

  return (
    <Stack component="form" spacing={3} onSubmit={handleSubmit} onChange={debouncedChangeHandler}>
      <CurrencyField value={values.currency} handleChange={handleChange} />
      <AmountField
        value={values.amount}
        currencySymbol={mappedSymbolsByCurrency[values.currency]}
        handleChange={handleChange}
      />
      <TermField changeFormikFieldValue={setFieldValue} />
      <OptionFields
        handleChange={handleChange}
        optionValues={{
          isEarlyRepayment: values.isEarlyRepayment,
          isPartial: values.isPartial,
          isCapitalization: values.isCapitalization
        }}
      />
    </Stack>
  );
};
