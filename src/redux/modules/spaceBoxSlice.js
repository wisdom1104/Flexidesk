import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { cookies } from '../../shared/cookies';
import api from '../../axios/api';
import { __getSpaces } from './spacesSlice';
import { __getSpace } from './spaceSlice';

const initialState = {
  box: [],
  isLoading: false,
  error: null,
};

// box 추가
export const __addBox = createAsyncThunk('__addBox', async (payload, thunk) => {
  console.log('payload', payload);
  try {
    const token = cookies.get('token');
    const companyName = cookies.get('companyName');
    const response = await api.post(
      `/box/${companyName}/${payload.spaceId}`,
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
    // console.log(response.data.data);
    thunk.dispatch(__getSpaces(payload.spaceId));
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
    console.log(payload.boxId);
    try {
      const token = cookies.get('token');
      const companyName = cookies.get('companyName');
      ///box/{companyName}/{boxId}
      const response = await api.delete(
        `/box/${companyName}/${payload.boxId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      // console.log(response.data.data);
      thunk.dispatch(__getSpaces(payload.spaceId));
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
