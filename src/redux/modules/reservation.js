import React from 'react'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { cookies } from '../../shared/cookies'
import axios from 'axios'
import api from '../../axios/api'

const initialState = {
  reservation:[]
  
}

export const __getReservation = createAsyncThunk(
  "getreservation",
  async(payload,thunk) =>{
    try{
      const token = cookies.get('token')
      await api.get("/reservation/1")
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
      await api.post("/reservation/1 ", payload,
     { headers : {
        Authorization: `Bearer ${token}`
      }
    })
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

  }
})
export default reservationSlice.reducer;