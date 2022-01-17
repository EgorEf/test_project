import { FC } from 'react';
import Stack from '@mui/material/Stack';
import { ProductCard } from './ProductCard';
import { HelpText } from './HelpText';
import { selectProducts } from '../productsSlice';
import { useAppSelector as useSelector } from '../../../app/hooks';
import { Product } from '../../../app/types';

export const Products: FC = () => {
  const accessedProducts = useSelector(selectProducts);

  const renderProductCard = (product: Product) => (
    <ProductCard key={product.id} productData={product} />
  );

  if (!accessedProducts) return null;

  return (
    <Stack spacing={2}>
      {
        (accessedProducts.length === 0)
          ? <HelpText />
          : accessedProducts.map(renderProductCard)
      }
    </Stack>
  );
};
