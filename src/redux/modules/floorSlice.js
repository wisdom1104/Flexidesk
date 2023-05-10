import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getCookie } from '../../shared/cookies';
import api from '../../axios/api';
import { __getFloors } from './floorsSlice';

const initialState = {
  floors: [],
  isLoading: false,
  error: null,
};

// floor 삭제
export const __deleteFloor = createAsyncThunk(
  'deleteFloor',
  async (floorId, thunk) => {
    try {
      const token = getCookie('token');
      const companyName = getCookie('companyName');
      const response = await api.delete(`/floors/${companyName}/${floorId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      thunk.dispatch(__getFloors());
      return thunk.fulfillWithValue(response.data.data);
    } catch (error) {
      return error;
    }
  },
);

// floor name 수정
export const __editFloor = createAsyncThunk(
  'editFloor',
  async (payload, thunk) => {
    try {
      const token = getCookie('token');
      const companyName = getCookie('companyName');
      const response = await api.patch(
        `/floors/${companyName}/${payload.floorId}`,
        {
          floorName: payload.floorName,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      thunk.dispatch(__getFloors());
      return thunk.fulfillWithValue(response.data.data);
    } catch (error) {
      return error;
    }
  },
);

export const floorSlice = createSlice({
  name: 'floor',
  initialState,
  reducers: {},
  extraReducers: {},
});
export default floorSlice.reducer;
