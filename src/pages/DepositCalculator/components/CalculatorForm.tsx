import { useMemo } from 'react';
import { useFormik } from 'formik';
import debounce from 'lodash.debounce';
import Stack from '@mui/material/Stack';
import { CurrencyField } from './СurrencyField';
import { AmountField } from './AmountField';
import { TermField } from './TermField';
import { ReturnTypeFunc, ProductRequest } from '../../../app/types';
import { OptionFields } from './OptionFields';
import { useGetProductsMutation } from '../../../services/productsApi';

const initialValues = {
  currency: 'rub',
  amount: 0,
  term: 0,
  isEarlyRepayment: false,
  isPartial: false,
  isCapitalization: false
};

export const CalculatorForm = (): ReturnTypeFunc => {
  const [getProducts] = useGetProductsMutation();

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      const product: ProductRequest = values;
      getProducts(product)
        .unwrap()
        .catch((e) => console.log(e));
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
    () => debounce(handleFormChange, 500),
    []
  );

  return (
    <Stack component="form" spacing={3} onSubmit={handleSubmit} onChange={debouncedChangeHandler}>
      <CurrencyField value={values.currency} handleChange={handleChange} />
      <AmountField
        value={values.amount}
        currency={values.currency}
        handleChange={handleChange}
      />
      <TermField changeFormikFieldValue={setFieldValue} />
      <OptionFields
        handleChange={handleChange}
        value={{
          isEarlyRepayment: values.isEarlyRepayment,
          isPartial: values.isPartial,
          isCapitalization: values.isCapitalization
        }}
      />
    </Stack>
  );
};
