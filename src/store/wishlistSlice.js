import { createSlice } from "@reduxjs/toolkit";
import { removeFromCart } from "./cartSlice";

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: [],
  reducers: {
    toggle(state, action) {
      const newProduct = action.payload;

      const foundProduct = state.find((item) => item.id === newProduct.id);

      if (foundProduct) {
        return state.filter((item) => item.id !== action.payload.id);
      } else {
        state.push(action.payload);
      }
    },
    removeFromWishlist(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { toggle, removeFromWishlist } = wishlistSlice.actions;
