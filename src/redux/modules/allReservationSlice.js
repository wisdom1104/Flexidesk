import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { cookies } from "../../shared/cookies";
import api from "../../axios/api";

const initialState = {
    reservationList:[],
    isLoading: false,
    isError: false,
    isSuccess: false,
};

  export const __getAllReservation = createAsyncThunk(
    "getAllReservation",
    async(payload,thunk) =>{
      try{
        const token = cookies.get('token')
        const companyName = cookies.get('companyName');
        console.log(companyName);
        const data = await api.get(`/${companyName}/reservations/all`,{
          headers:{
            Authorization:`Bearer ${token}`
          }
        })
        console.log('전체조회 slice->>>>',data);
        console.log('전체조회 slice2->>>>',data.data.data.reservationList);

        return thunk.fulfillWithValue(data.data.data.reservationList)
      }catch(error){
        return thunk.rejectWithValue(error)
      }
    }
  )

  export const allReservationSlice = createSlice({
    name:'reservation',
    initialState,
    reducers:{
    },
    extraReducers:{
        [__getAllReservation.pending] : (state, action) => {
            state.isLoading = false;
            state.isError = false;        
        },
      [__getAllReservation.fulfilled] : (state, action) =>{
        state.isLoading = true;
        state.isError = false;        
        // 체크해보기
        state.reservationList = action.payload;
        console.log(action);
      },
      [__getAllReservation.rejected] : (state, action) => {
        state.isLoading = true;
        state.isError = true;
      }
    }
  })

export default allReservationSlice.reducer;