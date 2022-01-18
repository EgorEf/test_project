import { FC } from 'react';
import {
  HashRouter,
  Routes,
  Route,
  Navigate,
  Outlet
} from 'react-router-dom';
import Box from '@mui/material/Box';
import { useGetCurrentUser } from './app/hooks';
import { Role } from './app/enums';
import { AuthPage } from './pages/Auth/AuthPage';
import { ProtectedRouter } from './components/ProtectedRouter';
import { Layout } from './pages/Layout/Layout';
import { NotFound } from './pages/NotFound/NotFound';
import { DepositCalculator } from './pages/DepositCalculator/DepositCalculator';
import { NewApplicationWrapper } from './pages/DepositApplication/NewApplicationWrapper';
import { UploadedApplicationWrapper } from './pages/DepositApplication/UploadedApplicationWrapper';
import { DepositList } from './pages/DepositList/DepositList';

export const App: FC = () => {
  const user = useGetCurrentUser();

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
              (user?.role === Role.ADMIN)
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
                    <Route path="depositApplication" element={<Outlet />}>
                      <Route path=":applicationId" element={<UploadedApplicationWrapper />} />
                      <Route path="new/:productId" element={<NewApplicationWrapper />} />
                    </Route>
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
