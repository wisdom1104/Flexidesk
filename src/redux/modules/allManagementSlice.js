import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getCookie } from '../../shared/cookies';
import api from '../../axios/api';

const initialState = {
  userList: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
};

export const __getAllManagement = createAsyncThunk(
  'getAllReservation',
  async (payload, thunk) => {
    try {
      const token = getCookie('token');
      const data = await api.get(`/admin/users`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return thunk.fulfillWithValue(data.data.data.userList);
    } catch (error) {
      return thunk.rejectWithValue(error);
    }
  },
);

export const __deleteAllManagement = createAsyncThunk(
  'deleteAllManagement',
  async (payload, thunk) => {
    try {
      const token = getCookie('token');
      await api.delete(`/admin/users/${payload}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      await thunk.dispatch(__getAllManagement());
      return thunk.fulfillWithValue(payload);
    } catch (error) {
      return thunk.rejectWithValue(error);
    }
  },
);

export const __editAllManagement = createAsyncThunk(
  'editAllManagement',
  async (payload, thunk) => {
    try {
      const token = getCookie('token');
      await api.patch(`/admin/users/${payload.userId}`, payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      await thunk.dispatch(__getAllManagement());
    } catch (error) {
      return thunk.rejectWithValue(error);
    }
  },
);

export const allManagementSlice = createSlice({
  name: 'allManagement',
  initialState,
  reducers: {},
  extraReducers: {
    [__getAllManagement.pending]: (state, action) => {
      state.isLoading = false;
      state.isError = false;
    },
    [__getAllManagement.fulfilled]: (state, action) => {
      state.isLoading = true;
      state.isError = false;
      state.userList = action.payload;
    },
    [__getAllManagement.rejected]: (state, action) => {
      state.isLoading = true;
      state.isError = true;
    },
  },
});

export default allManagementSlice.reducer;
