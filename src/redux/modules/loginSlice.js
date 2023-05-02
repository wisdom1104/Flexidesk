import { createSlice } from '@reduxjs/toolkit';
import { getCookie, removeCookie } from '../../shared/cookies';

const initialState = {
  users: [],
  isLogin: false,
  isLoading: false,
  isError: null,
};

if (getCookie('token')) {
  initialState.isLogin = true;
}

//////////////////////////////////////////////////////////////////////////////////////////////////////

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    login(state) {
      state.isLogin = true;
    },
    logout(state) {
      state.isLogin = false;
      removeCookie('token');
      removeCookie('userId');
      removeCookie('companyName');
      removeCookie('username');
      removeCookie('role');
    },
  },
  extraReducers: {},
});

export const isLoginActions = loginSlice.actions;
export default loginSlice.reducer;
