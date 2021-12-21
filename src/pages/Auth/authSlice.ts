import { createSlice } from '@reduxjs/toolkit';
import { authApi } from '../../services/authApi';
import type { RootState } from '../../app/store';
import type { UserState, User } from '../../app/types';

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
    );
  }
});

export const selectCurrentUser = (state: RootState): User => state.auth.user;

export default authSlice.reducer;
