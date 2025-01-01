import React from "react";
import { useDispatch, useSelector } from "react-redux";
import crossIcon from "../../assets/icons/cross-icon.svg";
import { addToCartFromWishlist } from "../../store/wishlistSlice";

const Wishlist = () => {
  const dispatch = useDispatch();
  const wishlist = useSelector((store) => store.wishlist);
  const product = useSelector((store) => store.product);
  const wishlistLength = useSelector((store) => store.wishlist.length);

  function handleAddToCart() {
    dispatch(addToCartFromWishlist(product));
  }

  return (
    <>
      <div className="grid grid-cols-1 gap-2">
        {wishlist.map((item) => (
          <div className="flex justify-between gap-[15px] w-[341px] py-4 pb-[56px] border-b-2">
            <div className="item__img">
              <img className="w-[90px] h-[90px]" src={item.image} alt="" />
            </div>
            <div className="item__info flex flex-col gap-2">
              <h1>{item.name}</h1>
              <p className="font-semibold">In stock:{item.stock}</p>
              <div className="flex items-center justify-between gap-6">
                {/* <div className="flex justify-between items-center gap-2">
                           <button className="py-3 px-2" onClick={() => {
                               dispatch(decreaseQuantity(cartItem.product.id))
                               }}>-</button>
                           <span className="px-4 py-2 border-[0.5px] border-[#D9D9D9] rounded">{cartItem.quantity}</span>
                           <button className="py-3 px-2" onClick={() => {
                               dispatch(increaseQuantity(cartItem.product.id))
                               }}>+</button>
                           </div> */}

                <p className="text-xl font-medium">${item.price}</p>

                <button
                  onClick={() => {
                    dispatch(removeFromCart(item.id));
                  }}
                >
                  <img className="w-6 h-6" src={crossIcon} alt="" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Wishlist;
