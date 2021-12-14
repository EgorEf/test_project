import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import Container from '@mui/material/Container';
import { AuthPage } from './pages/authPage/AuthPage';
import { ProtectedRouter } from './components/ProtectedRouter';
import { ReturnTypeFunc } from './app/types';

export const App = () => (
  <Container sx={{ height: '100vh' }} disableGutters>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="deposit" replace />} />
        <Route path="login" element={<AuthPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </Container>
);
