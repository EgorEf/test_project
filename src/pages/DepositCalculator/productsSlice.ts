import { createSlice } from '@reduxjs/toolkit';
import { productsApi } from '../../services/productsApi';
import type { RootState } from '../../app/store';

const initialState = {
  products: []
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      productsApi.endpoints.products.matchFulfilled,
      (state, { payload }) => {
        console.log(payload);
        return state;
      }
    );
  }
});

export const selectProducts = (state: RootState) => state.products.products;

export default productsSlice.reducer;
