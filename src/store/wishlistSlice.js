import { createSlice } from "@reduxjs/toolkit";



 export const wishlistSlice = createSlice({
    name: "wishlist",
    initialState: [],
    reducers: {
        toggle(state, action) {

            const newProduct = action.payload

            const foundProduct = state.find((item) => item.id === newProduct.id)

            if (foundProduct) {
                return state.filter((item) => item.id !== action.payload.id)
            }
            else{
                state.push(action.payload)
            }

        },
        addToCartFromWishlist(state, action){
            const newProduct = action.payload;

            const foundCart = state.find((item) => item.id === newProduct.id)

            if (!foundCart) {
                state.push({
                    product: newProduct,
                    quantity: 1
                })
            }
        }
    }
})

export const {toggle, addToCartFromWishlist} = wishlistSlice.actions