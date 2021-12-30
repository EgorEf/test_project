import { useParams } from 'react-router-dom';
import { useAppSelector as useSelector } from '../../app/hooks';
import { selectProduct } from '../DepositCalculator/productsSlice';
import { ReturnTypeFunc } from '../../app/types';

export const DepositApplication = (): ReturnTypeFunc => {
  const { applicationId } = useParams();
  const productData = useSelector(
    selectProduct(Number(applicationId))
  );

  return (
    <h1>Депозитная заявка</h1>
  );
};
