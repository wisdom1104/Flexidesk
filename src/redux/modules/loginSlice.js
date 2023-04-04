import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { cookies } from "../../shared/cookies";
import instance from '../../axios/api'
import jwt_decode from "jwt-decode";

const initialState = {
    users: [],
    isLogin: false,
    isLoading: false,
    isError: null,
};

// export const __login = createAsyncThunk(
//     "LOGIN",
//     async (payload, thunkAPI) => {
//         try {
//             const data = await instance.post("/login", payload)
//             console.log("로그인 슬라이스 콘솔 --->>>>",payload);
//             const token = data.headers.authorization
//             const newtoken = token.split(" ")[1]
//             const payload = jwt_decode(newtoken);
//             cookies.set("token", newtoken,{path:'/'})

//             // cookies.set("token", data.headers.authorization, { path: "/" });
//             return thunkAPI.fulfillWithValue(payload)
//         }
//         catch (error) {
//             const errorMsg = error.response.data.errorMessage;
//             console.log(errorMsg);
//             return thunkAPI.rejectWithValue(errorMsg);
//         }
//     }
// );

//////////////////////////////////////////////////////////////////////////////////////////////////////

export const loginSlice  = createSlice({
    name: "login",
    initialState,
    reducers: {
        // login(state) {
        //     state.isLogin = true;
        // },
        // logout(state){
        //     state.isLogin = false;
        //     cookies.remove("token");
        // },
    },
    extraReducers: {
        // [__login.pending]: (state, action) => {
        //     state.isLoading = true;
        //     state.isError = false;
        // },
        // [__login.fulfilled]: (state, action) => {
        //     state.isLoading = true;
        //     state.isError = false;
        //     state.users = action.payload;
        // },
        // [__login.rejected]: (state, action) => {
        //     state.isLoading = false;
        //     state.isError = action.payload;
        // },
    }
});

export const isLoginActions = loginSlice.actions;
export default loginSlice.reducer;