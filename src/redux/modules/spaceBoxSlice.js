import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getCookie } from '../../shared/cookies';
import api from '../../axios/api';
import { __getSpace } from './spaceSlice';

const initialState = {
  box: [],
  isLoading: false,
  error: null,
};

export const __addBox = createAsyncThunk('addBox', async (payload, thunk) => {
  try {
    const token = getCookie('token');
    const companyName = getCookie('companyName');
    const response = await api.post(
      `/boxes/${companyName}/${payload.spaceId}`,
      {
        boxName: payload.boxName,
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

export const __deleteBox = createAsyncThunk(
  'deleteBox',
  async (payload, thunk) => {
    try {
      const token = getCookie('token');
      const companyName = getCookie('companyName');
      const response = await api.delete(
        `/boxes/${companyName}/${payload.boxId}`,
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

export const __editBox = createAsyncThunk('editBox', async (payload, thunk) => {
  try {
    const token = getCookie('token');
    const companyName = getCookie('companyName');
    const response = await api.patch(
      `/boxes/${companyName}/${payload.boxId}`,
      {
        boxName: payload.boxName,
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
});

export const __editBoxUser = createAsyncThunk(
  'editBoxUser',
  async (payload, thunk) => {
    try {
      const token = getCookie('token');
      const companyName = getCookie('companyName');
      const response = await api.patch(
        `/locations/${companyName}/${payload.locationId}`,
        {
          boxName: payload.boxName,
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

export const spaceBoxSlice = createSlice({
  name: 'box',
  initialState,
  reducers: {},
  extraReducers: {},
});
export default spaceBoxSlice.reducer;
