import { createSlice } from '@reduxjs/toolkit';
import { authApi } from '../../services/authApi';
import type { UserState } from './types';

const initialState: UserState = {
  user: null
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        state.user = payload;
      }
    )
  },
});

export default authSlice.reducer;
