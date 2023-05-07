import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { cookies } from '../../shared/cookies';
import api from '../../axios/api';

const initialState = {
  floors: [],
  isLoading: false,
  isError: null,
};

// floor 전체 조회
export const __getFloors = createAsyncThunk(
  'getFloors',
  async (payload, thunk) => {
    try {
      const token = cookies.get('token');
      // const token = cookies.get('refresh_token');
      const companyName = cookies.get('companyName');
      const response = await api.get(`/floors/${companyName}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return thunk.fulfillWithValue(response.data.data);
    } catch (error) {
      return error;
    }
  },
);

// floor 추가
export const __addFloor = createAsyncThunk(
  'addFloor',
  async (newFloor, thunk) => {
    try {
      const token = cookies.get('token');
      const companyName = cookies.get('companyName');
      const response = await api.post(`/floors/${companyName}`, newFloor, {
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

export const floorsSlice = createSlice({
  name: 'floors',
  initialState,
  reducers: {},
  extraReducers: {
    //전체 조회
    [__getFloors.pending]: state => {
      state.isLoading = true;
    },
    [__getFloors.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.floors = action.payload;
    },
    [__getFloors.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
export default floorsSlice.reducer;
