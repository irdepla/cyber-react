import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: JSON.parse(localStorage.getItem("cart")) || [],
  reducers: {
    addToCart(state, action) {
      const newProduct = action.payload;

      const foundCart = state.find((item) => item.product.id === newProduct.id);

      if (!foundCart) {
        state.push({
          product: newProduct,
          quantity: 1,
        });
      }
    },
    removeFromCart(state, action) {
      return state.filter((item) => item.product.id !== action.payload);
    },
    increaseQuantity(state, action) {
      const id = action.payload;
      const foundCart = state.find((item) => item.product.id === id);
      foundCart.quantity++;
    },
    decreaseQuantity(state, action) {
      const id = action.payload;
      const foundCart = state.find((item) => item.product.id === id);
      if ((foundCart.quantity > 1)) {
        foundCart.quantity--;
      } else {
        alert("Incorrect! You can't decrease anymore!!!");
      }
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;
