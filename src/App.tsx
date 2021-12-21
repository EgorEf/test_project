import {
  HashRouter,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import Box from '@mui/material/Box';
import { selectCurrentUser } from './pages/Auth/authSlice';
import { useAppSelector as useSelector } from './app/hooks';
import { ReturnTypeFunc } from './app/types';
import { AuthPage } from './pages/Auth/AuthPage';
import { ProtectedRouter } from './components/ProtectedRouter';
import { Layout } from './pages/Layout/Layout';
import { NotFound } from './pages/NotFound/NotFound';
import { DepositCalculator } from './pages/DepositCalculator/DepositCalculator';
import { DepositApplication } from './pages/DepositApplication/DepositApplication';
import { DepositList } from './pages/DepositList/DepositList';

export const App = (): ReturnTypeFunc => {
  const user = useSelector(selectCurrentUser);

  return (
    <Box sx={{ height: '100vh' }}>
      <HashRouter>
        <Routes>
          <Route
            path="/"
            element={(
              <ProtectedRouter>
                <Layout />
              </ProtectedRouter>
            )}
          >
            {
              (user?.role === 'admin')
                ? (
                  <>
                    <Route index element={<Navigate to="depositList" replace />} />
                    <Route path="depositList" element={<DepositList />} />
                  </>
                )
                : (
                  <>
                    <Route index element={<Navigate to="depositCalculator" replace />} />
                    <Route path="depositCalculator" element={<DepositCalculator />} />
                    <Route path="depositApplication" element={<DepositApplication />} />
                  </>
                )
            }
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="login" element={<AuthPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </Box>
  );
};
