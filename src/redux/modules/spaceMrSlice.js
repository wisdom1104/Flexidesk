import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { cookies } from '../../shared/cookies';
import api from '../../axios/api';
import { __getSpaces } from './spacesSlice';
import { __getSpace } from './spaceSlice';

const initialState = {
  mr: [],
  isLoading: false,
  error: null,
};

// mr 추가
export const __addMr = createAsyncThunk('addMr', async (payload, thunk) => {
  console.log('payload', payload);
  try {
    const token = cookies.get('token');
    const companyName = cookies.get('companyName');
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
    // console.log(response.data.data);
    // thunk.dispatch(__getSpaces(payload.spaceId));
    thunk.dispatch(__getSpace(payload.spaceId));
    return thunk.fulfillWithValue(response.data.data);
  } catch (error) {
    return error;
  }
});

// mr 삭제
export const __deleteMr = createAsyncThunk(
  'deleteMr',
  async (payload, thunk) => {
    console.log(payload.mrId);
    try {
      const token = cookies.get('token');
      const companyName = cookies.get('companyName');
      // /mr/{companyName}/{mrId}
      const response = await api.delete(`/mr/${companyName}/${payload.mrId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // console.log(response.data.data);
      // thunk.dispatch(__getSpaces(payload.spaceId));
      thunk.dispatch(__getSpace(payload.spaceId));
      return thunk.fulfillWithValue(response.data.data);
    } catch (error) {
      return error;
    }
  },
);

// mr 수정
export const __editMr = createAsyncThunk('editMr', async (payload, thunk) => {
  console.log('payload', payload);
  try {
    const token = cookies.get('token');
    const companyName = cookies.get('companyName');
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
    // console.log(response.data.data);
    // thunk.dispatch(__getSpaces(payload.spaceId));
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
