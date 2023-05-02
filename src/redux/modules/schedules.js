import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getCookie } from '../../shared/cookies'
import api from '../../axios/api'


const initialState = {
  schedules:[],
  userSchedules:[]
}
console.log('initialState',initialState);

export const __getSchedules = createAsyncThunk(
  "getschedules",
  async(payload,thunk) =>{
    try{
      const token = getCookie('token')
      const data = await api.get(`/schedules?selDate=${payload.selectDay}`,{
        headers:{
          Authorization:`Bearer ${token}`
        }
      })
      return thunk.fulfillWithValue(data.data.data.timeList)
    }catch(error){
      return thunk.rejectWithValue(error)
    }
  }
)

export const __addSchdule = createAsyncThunk(
  "addschedule",
  async(payload,thunk) =>{
    const selectdate = {selectDay : payload.startList[0].start.split('T')[0]}
    try{
      const token = getCookie('token')
      await api.post('/schedules',payload,{
        headers:{
          Authorization:`Bearer ${token}`
        }
      })
      await thunk.dispatch(__getSchedules(selectdate))
      return thunk.fulfillWithValue(payload)
    }catch(error)
    {return thunk.rejectWithValue(error)}
  }

)

export const __getAllSchedules = createAsyncThunk(
  "getallschedules",
  async(payload,thunk) =>{
    try{
      const token = getCookie('token')
      const data = await api.get(`/schedules/all`,{
        headers:{
          Authorization:`Bearer ${token}`
        }
      })
      return thunk.fulfillWithValue(data.data.data.scList)
    }catch(error){
      return thunk.rejectWithValue(error)
    }
  }
)

export const __deleteSchedule = createAsyncThunk(
  "deletschedule",
  async (payload,thunk) =>{
    try{
      const token = getCookie('token')
      await api.delete(`/schedules/${payload}`,{
        headers:{
          Authorization:`Bearer ${token}`
        }
      })
      await thunk.dispatch(__getAllSchedules())
      return thunk.fulfillWithValue(payload)
    }catch(error){
      return thunk.rejectWithValue(error)
    }
  }
)

export const __pathScehdule = createAsyncThunk(
  "pathschedule",
  async (payload,thunk)=>{
    try{
      const token = getCookie('token')
      await api.patch(`/schedules/${payload.scId}`,payload.reqScheduleValue,{
        headers:{
          Authorization:`Bearer ${token}`
        }
      })
      await thunk.dispatch(__getAllSchedules())
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
      state.userSchedules = action.payload
    }

  }
})
export default schedulesSlice.reducer;