import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { cookies } from '../../shared/cookies';
import api from '../../axios/api';
import { __getFloors } from './floorsSlice';

const initialState = {
  spaces: [],
  isLoading: false,
  error: null,
};

//space 전체 조회
export const __getSpaces = createAsyncThunk(
  '__getSpaces',
  async (payload, thunk) => {
    try {
      const token = cookies.get('token');
      const companyName = cookies.get('companyName');
      const response = await api.get(`/spaces/${companyName}`, {
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

// space 추가
export const __addSpace = createAsyncThunk(
  '__addSpace',
  async (newSpace, thunk) => {
    try {
      const token = cookies.get('token');
      const companyName = cookies.get('companyName');
      const response = await api.post(`/spaces/${companyName}`, newSpace, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      thunk.dispatch(__getSpaces());
      return thunk.fulfillWithValue(response.data.data);
    } catch (error) {
      return error;
    }
  },
);

// floor 안에 space 추가
export const __addInnerSpace = createAsyncThunk(
  '__addInnerSpace',
  async (payload, thunk) => {
    try {
      const token = cookies.get('token');
      const companyName = cookies.get('companyName');
      const response = await api.post(
        `/spaces/${companyName}/${payload.floorId}`,
        {
          spaceName: payload.spaceName,
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

export const spacesSlice = createSlice({
  name: 'spaces',
  initialState,
  reducers: {},
  extraReducers: {
    //전체 조회
    [__getSpaces.pending]: state => {
      state.isLoading = true;
    },
    [__getSpaces.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.spaces = action.payload;
    },
    [__getSpaces.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
export default spacesSlice.reducer;
