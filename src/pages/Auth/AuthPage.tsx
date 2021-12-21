import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { AuthForm } from './components/AuthForm';
import { ReturnTypeFunc } from '../../app/types';

const FormContainer = styled('div')`
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  width: '100%',
`;

export const AuthPage = (): ReturnTypeFunc => (
  <Container maxWidth="xs" sx={{ pt: 30 }}>
    <Typography variant="h5" align="center" mb={3}>Вход</Typography>
    <FormContainer>
      <AuthForm />
    </FormContainer>
  </Container>
);
