import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { cookies } from '../../shared/cookies';
import api from '../../axios/api';
import { __getSpace } from './spaceSlice';

const initialState = {
  box: [],
  isLoading: false,
  error: null,
};

// box 추가
export const __addBox = createAsyncThunk('__addBox', async (payload, thunk) => {
  try {
    const token = cookies.get('token');
    const companyName = cookies.get('companyName');
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

// box 삭제
export const __deleteBox = createAsyncThunk(
  '__deleteBox',
  async (payload, thunk) => {
    try {
      const token = cookies.get('token');
      const companyName = cookies.get('companyName');
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

// box 수정
export const __editBox = createAsyncThunk('editBox', async (payload, thunk) => {
  try {
    const token = cookies.get('token');
    const companyName = cookies.get('companyName');
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

// box user 수정
export const __editBoxUser = createAsyncThunk(
  'editBoxUser',
  async (payload, thunk) => {
    try {
      const token = cookies.get('token');
      const response = await api.patch(
        `/locations/${payload.locationId}`,
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
