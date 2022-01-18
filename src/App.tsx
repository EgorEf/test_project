import { FC } from 'react';
import {
  HashRouter,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import Box from '@mui/material/Box';
import { selectCurrentUser } from './pages/Auth/authSlice';
import { useAppSelector as useSelector } from './app/hooks';
import { AuthPage } from './pages/Auth/AuthPage';
import { ProtectedRouter } from './components/ProtectedRouter';
import { Layout } from './pages/Layout/Layout';
import { NotFound } from './pages/NotFound/NotFound';
import { DepositCalculator } from './pages/DepositCalculator/DepositCalculator';
import { DepositApplication } from './pages/DepositApplication/DepositApplication';
import { DepositList } from './pages/DepositList/DepositList';

export const App: FC = () => {
  const user = useSelector(selectCurrentUser);

  return (
    <Box height="100%">
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
                    <Route path="depositList" element={<DepositList />} />
                    <Route path="depositApplication/:applicationId" element={<DepositApplication />} />
                    <Route path="depositApplication/new/:productId" element={<DepositApplication />} />
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
