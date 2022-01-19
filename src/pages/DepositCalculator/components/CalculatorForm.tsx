import { useMemo, FC } from 'react';
import { useFormik } from 'formik';
import debounce from 'lodash.debounce';
import Stack from '@mui/material/Stack';
import { CurrencyField } from './СurrencyField';
import { AmountField } from './AmountField';
import { TermField } from './TermField';
import { TProductRequest, TGetProducts } from '../../../app/types/productTypes';
import { OptionFields } from './OptionFields';

const initialValues = {
  currency: 'rub',
  amount: 0,
  term: 0,
  isEarlyRepayment: false,
  isPartial: false,
  isCapitalization: false
};

type PropType = {
  getProducts: TGetProducts
};

export const CalculatorForm: FC<PropType> = ({ getProducts }) => {
  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      const product: TProductRequest = values;
      getProducts(product)
        .unwrap()
        .catch((e) => {
          throw new Error(e);
        });
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
