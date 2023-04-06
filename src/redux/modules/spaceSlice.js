import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { cookies } from '../../shared/cookies';
import api from '../../axios/api';
import axios from 'axios';

const initialState = {
  spaces: [],
};

//space 전체 조회
// export const __getSpaces = createAsyncThunk(
//   'getSpaces',
//   async (payload, thunkAPI) => {
//     try {
//       const token = cookies.get('token');
//       const response = await api.get('/space', {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       // console.log(response);
//       return thunkAPI.fulfillWithValue(response.data);
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error);
//     }
//   },
// );
const token =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ0ZXN0QHRlc3QiLCJyb2xlIjoiQURNSU4iLCJpZCI6MSwidXNlcm5hbWUiOiJ0ZXN0IiwiY29tcGFueU5hbWUiOiJ0ZXN0IiwiZXhwIjoxNjgwNzg0MjEyLCJpYXQiOjE2ODA3ODA2MTJ9.VI3iw0MH7wqgtAQTTN2CU_WsFYe2oWOPGYSzS1eMak4';

//space 하나 조회
export const __getSpace = createAsyncThunk(
  '__getSpace',
  async (spaceId, thunkAPI) => {
    try {
      // const token = cookies.get('token');
      // const companyName = cookies.get('companyName');
      const response = await api.get('/test/space/16', {
        // const response = await api.get('/{companyName}/space/{spaceId}', {
        // /{companyName}/space/{spaceId}
        headers: {
          Authorization: `${token}`,
          // Authorization: ``,
        },
      });
      console.log(response);
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const spacesSlice = createSlice({
  name: 'spaces',
  initialState,
  reducers: {},
  extraReducers: {},
});
export default spacesSlice.reducer;
