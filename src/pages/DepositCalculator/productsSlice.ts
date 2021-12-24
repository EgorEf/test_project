import { createSlice } from '@reduxjs/toolkit';
import { productsApi } from '../../services/productsApi';
import type { RootState } from '../../app/store';
import type { Product } from '../../app/types';

type TState = {
  items: Array<Product>
};

const initialState: TState = {
  items: []
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      productsApi.endpoints.getProducts.matchFulfilled,
      (state, { payload }) => {
        state.items = payload;
      }
    );
  }
});

export const selectProducts = (state: RootState): Product[] => state.products.items;

export default productsSlice.reducer;
