import { createSlice } from "@reduxjs/toolkit";
import { cookies } from "../../shared/cookies";

const initialState = {
    token: null,
    isLogin: false,
    isError: null
  };
  
  const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
      login(state) {
        state.isLogin = true;
    },
    logout(state) {
        state.isLogin = false;
        cookies.remove("token");
    },
    }
  });
  
  export const { setToken, setUser, setError } = authSlice.actions;
  
  export const selectAuth = state => state.auth;
  export default authSlice.reducer;
  