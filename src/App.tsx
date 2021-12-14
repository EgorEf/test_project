import {
  HashRouter,
  Routes,
  Route
} from 'react-router-dom';
import Container from '@mui/material/Container';
import { AuthPage } from './pages/AuthPage/AuthPage';
import { ProtectedRouter } from './components/ProtectedRouter';
import { Home } from './pages/HomePage/Home';
import { NotFound } from './pages/NotFoundPage/NotFound';
import { ReturnTypeFunc } from './app/types';

export const App = (): ReturnTypeFunc => (
  <Container sx={{ height: '100vh' }} disableGutters>
    <HashRouter>
      <Routes>
        <Route
          path="/*"
          element={(
            <ProtectedRouter>
              <Home />
            </ProtectedRouter>
          )}
        />
        <Route path="login" element={<AuthPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  </Container>
);
