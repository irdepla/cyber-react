import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartProduct from "../../components/CartProduct";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { addOrder } from "../../service/ordersService";

const Cart = () => {
  const cart = useSelector((store) => store.cart);
  const [total, setTotal] = useState(0);
  const [address, setAddress] = useState("");

  useEffect(() => {
    let sum = 0;
    cart.forEach((item) => {
      sum += item.product.price * item.quantity;
    });
    setTotal(sum.toFixed(2));
  }, [cart]);

  async function handleSubmit(e) {
    e.preventDefault();
    const date = new Date(Date.now()).toLocaleDateString().split("/").join("-");

    const body = {
      address,
      date,
      items: cart.map((item) => ({
        quantity: item.quantity,
        productId: item.product.id,
      })),
    };
    console.log(body);



    const res = await addOrder(body)
    console.log(res);
  }

  return (
    <>
      <section className="cart">
        <div className="container">
          <h1 className="font-semibold text-2xl mt-10">Shopping Cart</h1>
          <div className="grid grid-cols-1 gap-10 mt-10">
            {cart.length > 0 &&
              cart.map((item) => <CartProduct key={item.id} cartItem={item} />)}
          </div>

          <h2>
            Your total is: <span className="font-bold">${total}</span>
          </h2>
          <form onSubmit={handleSubmit}>
            <Box
              component="div"
              sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="outlined-basic"
                label="Address"
                variant="outlined"
                onChange={(e) => setAddress(e.target.value)}
                value={address}
              />
            </Box>
            <Button type="submit" variant="contained">Order</Button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Cart;
