import { ReactElement, FC } from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { selectCurrentUser } from '../pages/Auth/authSlice';
import { useAppSelector as useSelector } from '../app/hooks';

type PropType = {
  children: ReactElement | null
};

export const ProtectedRouter: FC<PropType> = ({ children }) => {
  const user = useSelector(selectCurrentUser);
  const location = useLocation();

  if (!user) return <Navigate to="/login" state={{ from: location }} />;

  return children;
};
