import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { cookies } from '../../shared/cookies'
import api from '../../axios/api'


const initialState = {
  schedules:[],
  userScehdules:[]
  
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
      return thunk.fulfillWithValue(data.data.data.timeList)
    }catch(error){
      return thunk.rejectWithValue(error)
    }
  }
)

export const __addSchdule = createAsyncThunk(
  "addschedule",
  async(payload,thunk) =>{
    try{
      const token = cookies.get('token')
      await api.post('/schedules',payload,{
        headers:{
          Authorization:`Bearer ${token}`
        }
      })
      await thunk.dispatch(__getSchedules(payload.startData.startList[0].start.split('T')[0]))
      return thunk.fulfillWithValue(payload)
    }catch(error)
    {return thunk.rejectWithValue(error)}
  }

)

export const __getAllSchedules = createAsyncThunk(
  "getallschedules",
  async(payload,thunk) =>{
    try{
      const token = cookies.get('token')
      const data = await api.get(`/schedules/all`,{
        headers:{
          Authorization:`Bearer ${token}`
        }
      })
      console.log(data.data.data.scList);
      return thunk.fulfillWithValue(data.data.data.scList)
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
    },
    [__getAllSchedules.fulfilled]: (state,action) =>{
      state.userScehdules = action.payload
    }

  }
})
export default schedulesSlice.reducer;