import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  product: [
    {
      id:1,
      product: 'telephone',
      price: 1000,
    },
    {
      id:2,
      product: 'computer',
      price: 2500,
    },
    {
      id:3,
      product: 'headphones',
      price: 250,
    },
    {
      id:4,
      product: 'TV',
      price: 3000,
    },
  ],

  favorites: [],
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.favorites.push(action.payload)
    },
  },
})

export const { addToCart } = productSlice.actions

export default productSlice.reducer


