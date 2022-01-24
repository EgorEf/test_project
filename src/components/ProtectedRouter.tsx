import { ReactElement, FC } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { routes } from '../routes';
import { useGetCurrentUser } from '../app/hooks';

type PropType = {
  children: ReactElement | null
};

export const ProtectedRouter: FC<PropType> = ({ children }) => {
  const user = useGetCurrentUser();
  const location = useLocation();

  if (!user) return <Navigate to={routes.LOGIN} state={{ from: location }} />;

  return children;
};
