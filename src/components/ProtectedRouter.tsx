import { ReactElement } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { selectCurrentUser } from '../pages/Auth/authSlice';
import { useAppSelector as useSelector } from '../app/hooks';
import { ReturnTypeFunc } from '../app/types';

type InputParams = {
  children: ReactElement | null
};

export const ProtectedRouter = ({ children }: InputParams): ReturnTypeFunc => {
  const user = useSelector(selectCurrentUser);
  const location = useLocation();

  if (!user) return <Navigate to="/login" state={{ from: location }} />;

  return children;
};
