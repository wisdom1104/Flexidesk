import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getCookie } from '../../shared/cookies';
import api from '../../axios/api';

const initialState = {
  reservationDetail: [],
};

export const __getReservationDetail = createAsyncThunk(
  'getreservationdetail',
  async (payload, thunk) => {
    try {
      const token = getCookie('token');
      const data = await api.get(`users/reservations`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return thunk.fulfillWithValue(data.data.data.reservationList);
    } catch (error) {
      return thunk.rejectWithValue(error);
    }
  },
);

export const __deleteRervation = createAsyncThunk(
  'deletereservation',
  async (payload, thunk) => {
    try {
      const token = getCookie('token');
      await api.delete(`reservations/${payload}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return thunk.fulfillWithValue(payload);
    } catch (error) {
      return thunk.rejectWithValue(error);
    }
  },
);

export const reservationSlice = createSlice({
  name: 'reservationdetail',
  initialState,
  reducers: {},
  extraReducers: {
    [__getReservationDetail.fulfilled]: (state, action) => {
      state.reservationDetail = action.payload;
    },
    [__deleteRervation.fulfilled]: (state, action) => {
      state.reservationDetail = state.reservationDetail.filter(
        item => item.reservationId !== action.payload,
      );
    },
  },
});
export default reservationSlice.reducer;
