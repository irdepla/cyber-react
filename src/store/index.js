import { configureStore } from "@reduxjs/toolkit";
import { productSlice } from "./productSlice";
import Cart from "../pages/Cart";
import { cartSlice } from "./cartSlice";
import { wishlistSlice } from "./wishlistSlice";

export const store = configureStore({
  reducer: { 
    products: productSlice.reducer,
    cart: cartSlice.reducer,
    wishlist: wishlistSlice.reducer    
  },
});
