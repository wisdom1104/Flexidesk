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

// mr 부분 조회
export const __getmr = createAsyncThunk('__getmr', async (mrId, thunk) => {
  try {
    const token = cookies.get('token');
    const companyName = cookies.get('companyName');
    const response = await api.get(`/${companyName}/mr/${mrId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    // console.log(response.data.data);
    return thunk.fulfillWithValue(response.data.data);
  } catch (error) {
    return error;
  }
});

// mr 추가
export const __addMr = createAsyncThunk('__addMr', async (payload, thunk) => {
  console.log(payload);
  try {
    const token = cookies.get('token');
    const companyName = cookies.get('companyName');
    const response = await api.post(
      `/mr/${companyName}/${payload.spaceId}`,
      payload,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      },
    );
    // console.log(response.data.data);
    thunk.dispatch(__getSpace());
    thunk.dispatch(__getSpaces());
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
