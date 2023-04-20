import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { cookies } from '../../shared/cookies'
import api from '../../axios/api'
import { __getReservationDetail } from './detail'

const initialState = {
  reservation:[]
  
}

export const __getReservation = createAsyncThunk(
  "getreservation",
  async(payload,thunk) =>{
    try{
      const token = cookies.get('token')
      const data = await api.get(`/reservations/${payload.param}?selDate=${payload.selectDay}`,{
        headers:{
          Authorization:`Bearer ${token}`
        }
      })
      return thunk.fulfillWithValue(data.data)
    }catch(error){
      return thunk.rejectWithValue(error)
    }
  }
)

export const __addReservation=createAsyncThunk(
  "addreservation",
  async (payload, thunk) =>{
    try{
      const token = cookies.get('token')
      await api.post(`/reservations/${payload.param} `, payload.reqDatas,
     { headers : {
        Authorization: `Bearer ${token}`
      }
    })
    await thunk.dispatch(__getReservationDetail(payload))
    return thunk.fulfillWithValue(payload)
    }catch(error){
      return thunk.rejectWithValue(error)
    }
  }

)

export const reservationSlice = createSlice({
  name:'reservation',
  initialState,
  reducers:{
  },
  extraReducers:{
    [__getReservation.fulfilled] : (state, action) =>{
      state.reservation = action.payload.data
    }

  }
})
export default reservationSlice.reducer;