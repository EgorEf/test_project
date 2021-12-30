import { createSlice } from '@reduxjs/toolkit';
import { productsApi } from '../../services/productsApi';
import { logOut } from '../Auth/authSlice';
import type { RootState } from '../../app/store';
import type { Product } from '../../app/types';

type TState = {
  items: Array<Product> | null
};

const initialState: TState = {
  items: null
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      logOut,
      (state) => {
        state.items = null;
      }
    );
    builder.addMatcher(
      productsApi.endpoints.getProducts.matchFulfilled,
      (state, { payload }) => {
        state.items = payload;
      }
    );
  }
});

export const selectProducts = (state: RootState): Product[] | null => state.products.items;

export const selectProduct = (currentId: number) => (
  { products: { items } }: RootState
): Product | null => {
  if (!items) return null;
  const product = items.find(({ id }) => currentId === id) || null;
  return product;
};

export default productsSlice.reducer;
