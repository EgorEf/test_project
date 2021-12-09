import { useLocation, Navigate } from "react-router-dom";
import { DepositCalculator } from '../pages/clientPages/depositCalculator/DepositCalculator';
import { DepositOrders } from '../pages/adminPages/depositOrders/DepositOrders';
import { selectCurrentUser } from '../pages/authPage/authSlice';
import { useAppSelector as useSelector } from '../app/hooks';

export const ProtectedRouter = () => {
  const user = useSelector(selectCurrentUser);
  const location = useLocation();

  if (!user) return <Navigate to="/login" state={{ from: location }} />;

  if (user.role === 'admin') return <DepositOrders />;
  return <DepositCalculator />
};