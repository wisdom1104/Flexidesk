import { configureStore } from '@reduxjs/toolkit';
import reservation from '../modules/reservation';
import spaces from '../modules/spaceSlice';
import detail from '../modules/detail'
const store = configureStore({
  reducer: {
    reservation,
    spaces,
    detail
  },
});

export default store;
