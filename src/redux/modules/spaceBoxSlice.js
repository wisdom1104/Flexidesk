import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { cookies } from '../../shared/cookies';
import api from '../../axios/api';

const initialState = {
  box: [],
  isLoading: false,
  error: null,
};

// box 부분 조회
export const __getBox = createAsyncThunk('__getbox', async (boxId, thunk) => {
  try {
    const token = cookies.get('token');
    const companyName = cookies.get('companyName');
    const response = await api.get(`/${companyName}/box/${boxId}`, {
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

export const spaceBoxSlice = createSlice({
  name: 'box',
  initialState,
  reducers: {},
  extraReducers: {},
});
export default spaceBoxSlice.reducer;
