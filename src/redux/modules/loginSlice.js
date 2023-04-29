import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { cookies } from "../../shared/cookies";

const initialState = {
    users: [],
    isLogin: false,
    isLoading: false,
    isError: null,
};

if(cookies.get("token")) {
    initialState.isLogin = true;
};

//////////////////////////////////////////////////////////////////////////////////////////////////////

const loginSlice  = createSlice({
    name: "login",
    initialState,
    reducers: {
        login(state) {
            state.isLogin = true;
        },
        logout(state){
            state.isLogin = false;
            cookies.remove("token");
            cookies.remove("refresh_token");
            cookies.remove("userId");
            cookies.remove("companyName");
            cookies.remove("username");
            cookies.remove("role");
        },
    },
    extraReducers: {},
});

export const isLoginActions = loginSlice.actions;
export default loginSlice.reducer;