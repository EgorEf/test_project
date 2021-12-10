import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import Container from '@mui/material/Container';
import { AuthPage } from './pages/authPage/AuthPage';
import { ProtectedRouter } from './components/ProtectedRouter';

export const App = () => (
  <Container sx={{ height: '100vh' }} disableGutters>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="deposit" replace />} />
        <Route path="login" element={<AuthPage />} />
        <Route path="deposit" element={<ProtectedRouter />} />
      </Routes>
    </BrowserRouter>
  </Container>
);
