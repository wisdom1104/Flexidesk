import { configureStore } from '@reduxjs/toolkit'
import reservation from '../modules/reservation'
const store = configureStore({
  reducer: {
reservation,
  },
})

export default store
