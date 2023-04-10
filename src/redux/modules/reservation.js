import React from 'react'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { cookies } from '../../shared/cookies'
import axios from 'axios'
import api from '../../axios/api'
import { __getReservationDetail } from './detail'

const initialState = {
  reservation:[]
  
}

export const __getReservation = createAsyncThunk(
  "getreservation",
  async(payload,thunk) =>{
    console.log('페이로드',payload)
    try{
      const token = cookies.get('token')
      const data = await api.get(`/reservations/${payload.param}?selDate=${payload.selectDay}`,{
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

export const __addReservation=createAsyncThunk(
  "addreservation",
  async (payload, thunk) =>{
    console.log(payload)
    try{
      const token = cookies.get('token')
      await api.post("/reservations/1 ", payload,
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