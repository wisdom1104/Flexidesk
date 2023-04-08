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
        cookies.remove("userId");
        cookies.remove("companyName");
    },
    }
  });
  
  export default authSlice.reducer;