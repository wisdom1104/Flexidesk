import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getCookie } from '../../shared/cookies';
import api from '../../axios/api';
import { __getSpace } from './spaceSlice';

const initialState = {
  multiBox: [],
  isLoading: false,
  error: null,
};

export const __addMultiBox = createAsyncThunk(
  'addMultiBox',
  async (payload, thunk) => {
    try {
      const token = getCookie('token');
      const companyName = getCookie('companyName');
      const response = await api.post(
        `/multiBox/${companyName}/${payload.spaceId}`,
        {
          multiBoxName: payload.multiBoxName,
          x: payload.x,
          y: payload.y,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      thunk.dispatch(__getSpace(payload.spaceId));
      return thunk.fulfillWithValue(response.data.data);
    } catch (error) {
      return error;
    }
  },
);

export const __deleteMultiBox = createAsyncThunk(
  'deleteMultiBox',
  async (payload, thunk) => {
    try {
      const token = getCookie('token');
      const companyName = getCookie('companyName');
      const response = await api.delete(
        `/multiBox/${companyName}/${payload.multiBoxId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      thunk.dispatch(__getSpace(payload.spaceId));
      return thunk.fulfillWithValue(response.data.data);
    } catch (error) {
      return error;
    }
  },
);

// multiBox 수정
export const __editMultiBox = createAsyncThunk(
  'editMultiBox',
  async (payload, thunk) => {
    try {
      const token = getCookie('token');
      const companyName = getCookie('companyName');
      const response = await api.patch(
        `/multiBox/${companyName}/${payload.multiBoxId}`,
        {
          multiBoxName: payload.multiBoxName,
          username: payload.username,
          x: payload.x,
          y: payload.y,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      thunk.dispatch(__getSpace(payload.spaceId));
      return thunk.fulfillWithValue(response.data.data);
    } catch (error) {
      return error;
    }
  },
);

export const multiBoxSlice = createSlice({
  name: 'multiBox',
  initialState,
  reducers: {},
  extraReducers: {},
});
export default multiBoxSlice.reducer;
