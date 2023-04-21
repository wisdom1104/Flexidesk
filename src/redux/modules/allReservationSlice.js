import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { cookies } from '../../shared/cookies';
import api from '../../axios/api';

const initialState = {
  reservationList: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
};


export const __getAllReservation = createAsyncThunk(
  'getAllReservation',
  async (payload, thunk) => {
    try {
      const token = cookies.get('token');
      const companyName = cookies.get('companyName');
      const data = await api.get(`/reservations/${companyName}/all`, {
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

export const allReservationSlice = createSlice({
  name: 'reservation',
  initialState,
  reducers: {},
  extraReducers: {
    [__getAllReservation.pending]: (state, action) => {
      state.isLoading = false;
      state.isError = false;
    },
    [__getAllReservation.fulfilled]: (state, action) => {
      state.isLoading = true;
      state.isError = false;
      state.reservationList = action.payload;
    },
    [__getAllReservation.rejected]: (state, action) => {
      state.isLoading = true;
      state.isError = true;
    },
  },
});

export default allReservationSlice.reducer;
