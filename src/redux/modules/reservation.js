import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getCookie } from '../../shared/cookies'
import api from '../../axios/api'
import { __getReservationDetail } from './detail'

const initialState = {
  reservation:[],
  userData:[]
  
}

export const __getReservation = createAsyncThunk(
  "getreservation",
  async(payload,thunk) =>{
    try{
      const token = getCookie('token')
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
      const token = getCookie('token')
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

export const __getUserData=createAsyncThunk(
  "getuserdata",
  async(payload,thunk) =>{

    try{
      const checkHanIncode= payload =>{
        const chek_kor = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/;
        if(payload.match(chek_kor)){
          const encodeKeyword = encodeURI(payload)
          return encodeKeyword
        }else{
          return payload
        }
      }
      const token = getCookie('token')
      const userData = await api.get(`/users/search?name=${checkHanIncode(payload)} `,
     { headers : {
        Authorization: `Bearer ${token}`
      }
    })
    return thunk.fulfillWithValue(userData.data.data)
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
    },
    [__getUserData.fulfilled] : (state, action) =>{
      state.userData = action.payload
    }

  }
})
export default reservationSlice.reducer;