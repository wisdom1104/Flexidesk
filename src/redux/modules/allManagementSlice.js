import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { cookies } from "../../shared/cookies";
import api from "../../axios/api";

const initialState = {
    userList:[],
    isLoading: false,
    isError: false,
    isSuccess: false,
};

  //조회
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
        return thunk.fulfillWithValue(data.data.data.userList)
      }catch(error){
        return thunk.rejectWithValue(error)
      }
    }
  );

  //삭제
export const __deleteAllManagement = createAsyncThunk(
  'deleteAllManagement',
  async (payload, thunk) => {
    console.log('delete payload',payload)

    try {
      const token = cookies.get('token');
      
      await api.delete(`/users/${payload}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      thunk.dispatch(__getAllManagement());
      return thunk.fulfillWithValue(payload);
    } catch (error) {
      return thunk.rejectWithValue(error)
    }
  },
);

  //수정
  export const __patchAllManagement = createAsyncThunk(
    "patchAllManagement",
    async (payload, thunk)=>{
      console.log('patch payload',payload)
      try{
        const token = cookies.get('token')
        await api.patch(`/admin/users/${payload.userId}`,payload,{
          headers:{
            Authorization:`Bearer ${token}`
          }
        })
        await thunk.dispatch(__getAllManagement())
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