import { selectCurrentUser } from '../AuthPage/authSlice';
import type { ReturnTypeFunc } from '../../app/types';
import { useAppSelector as useSelector } from '../../app/hooks';
import { DepositCalculator } from './components/DepositCalculator';
import { DepositApplications } from './components/DepositApplications';

export const Home = (): ReturnTypeFunc => {
  const user = useSelector(selectCurrentUser);
  if (user?.role === 'admin') return <DepositApplications />;
  return <DepositCalculator />;
};
