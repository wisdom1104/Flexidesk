import { configureStore } from '@reduxjs/toolkit'
import reservation from '../modules/reservation'
import detail from '../modules/detail'
const store = configureStore({
  reducer: {
reservation, detail
  },
})

export default store
