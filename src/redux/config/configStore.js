import { configureStore } from '@reduxjs/toolkit';
import reservation from '../modules/reservation';
import spaces from '../modules/spaceSlice';
const store = configureStore({
  reducer: {
    reservation,
    spaces,
  },
});

export default store;
