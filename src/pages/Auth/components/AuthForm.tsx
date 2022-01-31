import { FC, SyntheticEvent, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { TAuthRequest, TAuthState } from '../../../app/types/authTypes';
import { useLazyLoginQuery } from '../../../services/authApi';
import { persistor } from '../../../app/store';
import { routes } from '../../../routes';

type TTarget = {
  target: {
    name: string,
    value: string
  }
};

const marginBottom = { mb: 3 };

const ButtonBox = styled(Box)`
  display: flex;
  justify-content: center;
`;

const handlePersistor = (isRemember: boolean) => {
  if (!isRemember) return persistor.pause();
  return persistor.persist();
};

export const AuthForm: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [authState, setAuth] = useState<TAuthState>({
    email: '',
    password: '',
    isRemember: false
  });

  const [getAuthUser, { isError, isLoading }] = useLazyLoginQuery();

  const handleChange = ({ target }: TTarget) => {
    const { value, name } = target;
    setAuth((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleChangeCheckbox = () => {
    const { isRemember } = authState;
    setAuth((prevState) => ({ ...prevState, isRemember: !isRemember }));
  };

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    const { email, password, isRemember } = authState;
    const requestData: TAuthRequest = { email, password };

    handlePersistor(isRemember);

    getAuthUser(requestData)
      .unwrap()
      .then(() => {
        const from = location.state?.from?.pathname || routes.DEPOSIT_CALCULATOR;
        navigate(from, { replace: true });
      })
      .catch((e) => (
        // eslint-disable-next-line no-console
        console.error(e, 'Error')
      ));
  };

  return (
    <Stack component="form" sx={{ width: 1 }} onSubmit={handleSubmit}>
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
        onChange={handleChangeCheckbox}
        checked={authState.isRemember}
        label="Запомнить меня"
        sx={marginBottom}
      />
      <ButtonBox>
        <Button variant="contained" type="submit" disabled={isLoading} sx={{ width: '180px' }}>
          Войти
        </Button>
      </ButtonBox>
    </Stack>
  );
};
