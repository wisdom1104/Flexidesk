import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { cookies } from '../../shared/cookies';
import api from '../../axios/api';
import { __getSpaces } from './spacesSlice';
import { __getFloors } from './floorsSlice';

const initialState = {
  space: [],
  isLoading: false,
  error: null,
};

// space 선택 조회
export const __getSpace = createAsyncThunk(
  '__getSpace',
  async (spaceId, thunk) => {
    try {
      const token = cookies.get('token');
      const companyName = cookies.get('companyName');
      const response = await api.get(
        `/spaces/${companyName}/${spaceId}
      `,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      return thunk.fulfillWithValue(response.data.data);
    } catch (error) {
      return error;
    }
  },
);

// space 삭제
export const __deleteSpace = createAsyncThunk(
  '__deleteSpace',
  async (spaceId, thunk) => {
    try {
      const token = cookies.get('token');
      const companyName = cookies.get('companyName');
      const response = await api.delete(`/spaces/${companyName}/${spaceId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      thunk.dispatch(__getSpaces());
      thunk.dispatch(__getFloors());
      return thunk.fulfillWithValue(response.data.data);
    } catch (error) {
      return error;
    }
  },
);

// space 수정
export const __editSpace = createAsyncThunk(
  '__editSpace',
  async (payload, thunk) => {
    // console.log(payload);
    try {
      const token = cookies.get('token');
      const companyName = cookies.get('companyName');
      const response = await api.patch(
        `/spaces/${companyName}/${payload.spaceId}`,
        {
          spaceName: payload.spaceName,
          floorId: payload.floorId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      thunk.dispatch(__getSpaces());
      thunk.dispatch(__getFloors());
      return thunk.fulfillWithValue(response.data.data);
    } catch (error) {
      return error;
    }
  },
);

export const spaceSlice = createSlice({
  name: 'space',
  initialState,
  reducers: {},
  extraReducers: {
    //space 부분 조회
    [__getSpace.pending]: state => {
      state.isLoading = true;
    },
    [__getSpace.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.space = action.payload;
    },
    [__getSpace.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
export default spaceSlice.reducer;
