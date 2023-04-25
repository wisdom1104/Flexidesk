import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { cookies } from "../../shared/cookies";
import api from "../../axios/api";

const initialState = {
    userList:[],
    isLoading: false,
    isError: false,
    isSuccess: false,
};

export const __getAllManagement = createAsyncThunk(
    "getAllReservation",
    async(payload,thunk) =>{
      try{
        const token = cookies.get('token')
        const data = await api.get(`/admin/users`
        ,{
          headers:{
            Authorization:`Bearer ${token}`
          }
        })
        console.log(data.data.data.userList);
        return thunk.fulfillWithValue(data.data.data.userList)
      }catch(error){
        return thunk.rejectWithValue(error)
      }
    }
  )

  export const allManagementSlice = createSlice({
    name:'allManagement',
    initialState,
    reducers:{
    },
    extraReducers:{
        [__getAllManagement.pending] : (state, action) => {
            state.isLoading = false;
            state.isError = false;        
        },
      [__getAllManagement.fulfilled] : (state, action) =>{
        state.isLoading = true;
        state.isError = false;        
        state.userList = action.payload;
      },
      [__getAllManagement.rejected] : (state, action) => {
        state.isLoading = true;
        state.isError = true;
      }
    }
  })

export default allManagementSlice.reducer;