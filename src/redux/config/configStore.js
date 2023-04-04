import { configureStore } from '@reduxjs/toolkit'
import reservation from '../modules/reservation'
import loginSlice from '../modules/loginSlice'
const store = configureStore({
  reducer: {
reservation,loginSlice
  },
})

export default store
