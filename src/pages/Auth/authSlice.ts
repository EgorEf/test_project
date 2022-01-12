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
  reducers: {
    logOut(state) {
      state.user = null;
    }
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        state.user = payload;
      }
    );
  }
});

export const { logOut } = authSlice.actions;

export const selectCurrentUser = (state: RootState): User | null => state.auth.user;

export default authSlice.reducer;
