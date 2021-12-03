import React from 'react';
import { useFormik } from 'formik';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';

const FormContainer = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  width: '100%',
});

interface FormState {
  email: string,
  password: string,
  remember: boolean
};

const CustomForm = () => {

  const initialValues: FormState = {
    email: '',
    password: '',
    remember: false
  };

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: (values: FormState, actions: any):void => {
      console.log(values, 'SUBMIT');
    }
  });

  const {
    handleChange,
    handleSubmit,
    isSubmitting,
    values
  } = formik;

  const marginBottom = { mb: 3 };

  return (
    <Stack component="form" sx={{width: 1}} onSubmit={handleSubmit}>
      <TextField
        id="name"
        name="email"
        label="Логин"
        variant="outlined"
        type="email"
        onChange={handleChange}
        sx={marginBottom}
        required
      />
      <TextField
        id="password"
        name="password"
        label="Пароль"
        variant="outlined"
        type="password"
        onChange={handleChange}
        sx={marginBottom}
        required
      />
      <FormControlLabel
        id="remember"
        name="remember"
        control={<Checkbox />}
        onChange={handleChange}
        checked={values.remember}
        label="Запомнить меня"
        sx={marginBottom}
      />
      <Button variant="contained" type="submit" disabled={isSubmitting}>
        Войти
      </Button>
    </Stack>
  );
};

const LoginPage = () => {
  return (
    <Container maxWidth="xs" sx={{pt: 30}}>
      <Typography variant="h5" align="center" mb={3}>Вход</Typography>
      <FormContainer>
        <CustomForm />
      </FormContainer>
    </Container>
  );
};

export default LoginPage;
