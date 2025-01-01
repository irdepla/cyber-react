import React, { useEffect } from "react";
import { getProducts } from "../../service/productService";
import { useDispatch, useSelector } from "react-redux";
import { addProducts } from "../../store/productSlice";
import WishlistIcon from "../../assets/icons/wishlist-icon.svg";
import ShoppingCartIcon from "../../assets/icons/shopping-cart-icon.svg";
import { Button } from "@mui/material";
import { addToCart } from "../../store/cartSlice";
import { NavLink, useLocation } from "react-router";
import { toggle } from "../../store/wishlistSlice";

const Card = () => {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.products);
  
  



  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await getProducts();
        dispatch(addProducts(res));
      } catch (error) {
        console.log(error);
      }
    }
    fetchProducts();
  }, []);

  function handleAddToCart(product) {
    dispatch(addToCart(product));
  }

  function handleToggle(product) {
    console.log("1");
    dispatch(toggle(product));
    console.log("ishladi");
  }

  return (
    <>
      <div className="container">
        <div className="grid grid-cols-2 gap-4">
          {products?.map((item) => (
            <div className="flex flex-col items-center" key={item.id}>
              <button onClick={() => handleToggle(item)} className="ml-[100px]">
                <img src={WishlistIcon} alt="" />
              </button>
              <NavLink to={`product-details/${item.id}`}>
                <img src={item.image} alt="" />
                <h1>{item.name}</h1>
              </NavLink>
              <p className="font-semibold text-2xl">${item.price}</p>
              <div className=" flex justify-between gap-1 items-center">
                <button className="px-2 py-3 bg-black text-white items-center rounded-lg ">
                  Buy Now
                </button>
                <Button onClick={() => handleAddToCart(item)}>
                  <img src={ShoppingCartIcon} alt="" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Card;
