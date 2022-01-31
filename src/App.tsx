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
import { Roles } from './app/types/authTypes';
import { routes } from './routes';
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
              (user?.role === Roles.ADMIN)
                ? (
                  <>
                    <Route index element={<Navigate to={routes.DEPOSIT_LIST} replace />} />
                    <Route path={routes.DEPOSIT_APPLICATION.PATH} element={<Outlet />}>
                      <Route path=":applicationId" element={<UploadedApplicationWrapper />} />
                    </Route>
                  </>
                )
                : (
                  <>
                    <Route index element={<Navigate to={routes.DEPOSIT_CALCULATOR} replace />} />
                    <Route path={routes.DEPOSIT_CALCULATOR} element={<DepositCalculator />} />
                    <Route path={routes.DEPOSIT_APPLICATION.PATH} element={<Outlet />}>
                      <Route path=":applicationId" element={<UploadedApplicationWrapper />} />
                      <Route path="new/:productId" element={<NewApplicationWrapper />} />
                    </Route>
                  </>
                )
            }
            <Route path={routes.DEPOSIT_LIST} element={<DepositList />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path={routes.LOGIN} element={<AuthPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </HashRouter>
    </Box>
  );
};
