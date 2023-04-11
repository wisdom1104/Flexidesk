import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { cookies } from '../../shared/cookies'
import api from '../../axios/api'

const initialState = {
  userSchedules:[]
  
}

export const __getUserSchedules = createAsyncThunk(
  "getuserschedules",
  async(payload,thunk) =>{
    console.log('페이로드',payload)
    try{
      const token = cookies.get('token')
      const data = await api.get(`/schedules`,{
        headers:{
          Authorization:`Bearer ${token}`
        }
      })
      console.log(data);
      return thunk.fulfillWithValue(data.data)
    }catch(error){
      return thunk.rejectWithValue(error)
    }
  }
)

export const userSchedulesSlice = createSlice({
  name:'userSchedules',
  initialState,
  reducers:{
  },
  extraReducers:{
    [__getUserSchedules.fulfilled] : (state, action) =>{
      state.reservation = action.payload.data
    }

  }
})
export default userSchedulesSlice.reducer;