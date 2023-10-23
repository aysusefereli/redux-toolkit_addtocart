import { configureStore } from '@reduxjs/toolkit'
import productReducer from './slices/productslice'

export const store = configureStore({
  reducer: {
    products: productReducer,
  },
})
