import React, { useState } from "react";
import crossIcon from "../../assets/icons/cross-icon.svg"
import { useDispatch, useSelector } from "react-redux";
import { decreaseQuantity, increaseQuantity, removeFromCart } from "../../store/cartSlice";

const CartProduct = ({cartItem}) => {
    const dispatch = useDispatch()    


  return (
    <>
      <div
        className="flex justify-between gap-[15px] w-[341px] py-4 pb-[56px] border-b-2"
      >
        <div className="item__img">
          <img className="w-[90px] h-[90px]" src={cartItem.product.image} alt="" />
        </div>
        <div className="item__info flex flex-col gap-2">
          <h1>
            {cartItem.product.name}
          </h1>
          <p className="font-semibold">In stock:{cartItem.product.stock}</p>
          <div className="flex items-center justify-between gap-6">

            <div className="flex justify-between items-center gap-2">
            <button className="py-3 px-2" onClick={() => {
                dispatch(decreaseQuantity(cartItem.product.id))
                }}>-</button>
            <span className="px-4 py-2 border-[0.5px] border-[#D9D9D9] rounded">{cartItem.quantity}</span>
            <button className="py-3 px-2" onClick={() => {
                dispatch(increaseQuantity(cartItem.product.id))
                }}>+</button>
            </div>


            <p className="text-xl font-medium">${cartItem.product.price}</p>


            <button onClick={() => {
                dispatch(removeFromCart(cartItem.product.id))
            }}>
                <img className="w-6 h-6" src={crossIcon} alt="" />
            </button>


          </div>
        </div>
      </div>
    </>
  );
};

export default CartProduct;
