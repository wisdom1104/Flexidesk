import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { cookies } from '../../shared/cookies'
import api from '../../axios/api'

const initialState = {
  schedules:[]
  
}

export const __getSchedules = createAsyncThunk(
  "getschedules",
  async(payload,thunk) =>{
    console.log('페이로드',payload)
    try{
      const token = cookies.get('token')
      const data = await api.get(`/schedules?selDate=${payload.selectDay}`,{
        headers:{
          Authorization:`Bearer ${token}`
        }
      })
      console.log(data.data.data.timeList);
      return thunk.fulfillWithValue(data.data.data)
    }catch(error){
      return thunk.rejectWithValue(error)
    }
  }
)


export const schedulesSlice = createSlice({
  name:'schedules',
  initialState,
  reducers:{
  },
  extraReducers:{
    [__getSchedules.fulfilled] : (state, action) =>{
      state.schedules = action.payload
    }

  }
})
export default schedulesSlice.reducer;