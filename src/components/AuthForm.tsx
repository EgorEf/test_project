import React, { useState } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import type { LoginState, RequestData } from '../pages/authPage/types';
import { useLoginMutation } from '../services/authApi';
import { persistor } from '../app/store';

const marginBottom = { mb: 3 };

const handlePersistor = (isRemember: boolean) => {
  if (!isRemember) return persistor.pause();
  return persistor.persist();
};

export const AuthForm = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [loginState, setFieldValue] = useState({
    email: '',
    password: '',
    isRemember: false
  } as LoginState);

  const [getAuthUser, { isError, isLoading }] = useLoginMutation();

  const handleChange = (event: any) => {
    const { target: { value, name, checked } } = event;
    const currentValue = (name === 'isRemember') ? checked : value;
    setFieldValue((prevState) => ({ ...prevState, [name]: currentValue }));
  };

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const { email, password, isRemember } = loginState;
    const requestData: RequestData = { email, password };

    handlePersistor(isRemember);

    getAuthUser(requestData)
      .unwrap()
      .then(() => {
        const from = location.state?.from?.pathname || "/";
        navigate(from, { replace: true })
      })
      .catch((e) => console.log(e, 'Error'));
  };

  return (
    <Stack component="form" sx={{width: 1}} onSubmit={handleSubmit}>
      <TextField
        id="email"
        name="email"
        label="Логин"
        variant="outlined"
        error={isError}
        type="email"
        onChange={handleChange}
        sx={marginBottom}
        required
      />
      <TextField
        id="password"
        name="password"
        label="Пароль"
        error={isError}
        variant="outlined"
        type="password"
        onChange={handleChange}
        helperText={isError ? 'Неверный логин или пароль!' : ' '}
        FormHelperTextProps={{ error: isError, sx: { mt: '15px' } }}
        required
      />
      <FormControlLabel
        id="isRemember"
        name="isRemember"
        control={<Checkbox />}
        onChange={handleChange}
        checked={loginState.isRemember}
        label="Запомнить меня"
        sx={marginBottom}
      />
      <Button variant="contained" type="submit" disabled={isLoading}>
        Войти
      </Button>
    </Stack>
  );
};
