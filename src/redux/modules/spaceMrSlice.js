import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getCookie } from '../../shared/cookies';
import api from '../../axios/api';
import { __getSpace } from './spaceSlice';

const initialState = {
  mr: [],
  isLoading: false,
  error: null,
};

export const __addMr = createAsyncThunk('addMr', async (payload, thunk) => {
  try {
    const token = getCookie('token');
    const companyName = getCookie('companyName');
    const response = await api.post(
      `/mr/${companyName}/${payload.spaceId}`,
      {
        mrName: payload.mrName,
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
});

export const __deleteMr = createAsyncThunk(
  'deleteMr',
  async (payload, thunk) => {
    try {
      const token = getCookie('token');
      const companyName = getCookie('companyName');
      // /mr/{companyName}/{mrId}
      const response = await api.delete(`/mr/${companyName}/${payload.mrId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      thunk.dispatch(__getSpace(payload.spaceId));
      return thunk.fulfillWithValue(response.data.data);
    } catch (error) {
      return error;
    }
  },
);

export const __editMr = createAsyncThunk('editMr', async (payload, thunk) => {
  try {
    const token = getCookie('token');
    const companyName = getCookie('companyName');
    const response = await api.patch(
      `/mr/${companyName}/${payload.mrId}`,
      {
        mrName: payload.mrName,
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
});

export const spaceMrSlice = createSlice({
  name: 'mr',
  initialState,
  reducers: {},
  extraReducers: {},
});
export default spaceMrSlice.reducer;
