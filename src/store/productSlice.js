import { createSlice, configureStore } from '@reduxjs/toolkit'

const productSlice = createSlice({
  name: 'product',
  initialState: {
    value: 0
  },
  reducers: {
    incremented: state => {
      state.value += 1
    },
    decremented: state => {
      state.value -= 1
    }
  }
})

export const { incremented, decremented } = productSlice.actions

