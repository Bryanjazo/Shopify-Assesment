import { configureStore } from '@reduxjs/toolkit'
import nasaStore from '../Redux/nasaReducer'
export const store = configureStore({
  reducer: {
    nasa: nasaStore
  },
})