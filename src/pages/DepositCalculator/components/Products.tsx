import { FC } from 'react';
import Stack from '@mui/material/Stack';
import { ProductCard } from './ProductCard';
import { HelpText } from './HelpText';
import { TProduct } from '../../../app/types/productTypes';

type TPropType = {
  products: TProduct[] | null
};

export const Products: FC<TPropType> = ({ products }) => {
  if (!products) return null;

  const renderProductCard = (product: TProduct) => (
    <ProductCard key={product.id} productData={product} />
  );

  return (
    <Stack spacing={2}>
      {
        (products.length === 0)
          ? <HelpText />
          : products.map(renderProductCard)
      }
    </Stack>
  );
};
