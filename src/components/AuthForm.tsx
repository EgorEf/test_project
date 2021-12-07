import { useState } from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import type { LoginRequest, RequestData } from '../pages/authPage/types';
import { useLoginMutation } from '../services/authApi';

export const AuthForm = () => {
  const [loginState, setFieldValue] = useState({
    email: '',
    password: '',
    isRemember: false
  } as LoginRequest);

  const [getAuthUser, { isError, isLoading }] = useLoginMutation();

  const handleChange = (event: any) => {
    const { target: { value, name, checked } } = event;
    const currentValue = (name === 'remember') ? checked : value;
    setFieldValue((prevState) => ({ ...prevState, [name]: currentValue }));
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    const { email, password } = loginState;
    const requestData: RequestData = { email, password };
    try {
      getAuthUser(requestData).unwrap();
    } catch(e) {
      console.log(e, 'ERROR');
    }
  };

  const marginBottom = { mb: 3 };

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
        id="remember"
        name="remember"
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
