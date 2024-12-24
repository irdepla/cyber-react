import { createSlice, configureStore } from '@reduxjs/toolkit'

export const productSlice = createSlice({
  name: 'products',
  initialState: [],
  reducers: {
    addProducts: (state, action) => {
      return action.payload;
    }
  }
})

export const { addProducts } = productSlice.actions

