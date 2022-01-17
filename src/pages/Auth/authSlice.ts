import { createSlice } from '@reduxjs/toolkit';
import { authApi } from '../../services/authApi';
import type { RootState } from '../../app/store';
import type { TUser } from '../../app/types';

export type TUserState = {
  user: TUser | null
};

const initialState: TUserState = {
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

export const selectCurrentUser = (state: RootState): TUser | null => state.auth.user;

export default authSlice.reducer;
