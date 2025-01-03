import React, { useState } from "react";
import { useSelector } from "react-redux";
import CartProduct from "../../components/CartProduct";

const Cart = () => {
  const cart = useSelector((store) => store.cart);
  // const [sum, setSum] = useState(0)
  let name = 0;
  const [state, setstate] = useState();

  return (
    <>
      <section className="cart">
        <div className="container">
          <h1 className="font-semibold text-2xl mt-10">Shopping Cart</h1>
          <div className=" grid grid-cols-1 gap-10  mt-10">
            {console.log(cart)}
            {cart.length > 0 &&
              cart.map((item) => <CartProduct key={item.id} cartItem={item} />)}
          </div>

          <h2>Your total is:</h2>
          <button>Order</button>
        </div>
      </section>
    </>
  );
};

export default Cart;