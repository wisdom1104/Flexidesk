
import { configureStore } from '@reduxjs/toolkit';
import reservation from '../modules/reservation';
import spaces from '../modules/spaceSlice';
import detail from '../modules/detail'
import loginSlice from '../modules/loginSlice'
const store = configureStore({
  reducer: {
    reservation,
    spaces,
    detail, 
    loginSlice
  },
});

export default store;
