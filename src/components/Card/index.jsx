import React, { useEffect } from "react";
import { getProducts } from "../../service/productService";
import { useDispatch, useSelector } from "react-redux";
import { addProducts } from "../../store/productSlice";
import heartIcon from "../../assets/icons/heart-icon.svg"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Button } from "@mui/material";
import { addToCart } from "../../store/cartSlice";
import { NavLink } from "react-router";

const Card = () => {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.products);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await getProducts();
        console.log("res:", res);
        
        dispatch(addProducts(res));
      } catch (error) {
        console.log(error);
      }
    }
    fetchProducts();
  }, []);

  function handleAddToCart(product){
    dispatch(addToCart(product))
  }


  return (
    <>
    <div className="container">
    <div className="grid grid-cols-2 gap-4">
      {products?.map((item) => (
        <div className="flex flex-col items-center" key={item.id}>
          <button className="ml-[100px]">
            <img src={heartIcon} alt="" />
          </button>
          <NavLink to={`product-details/${item.id}`} >
          <img src={item.image} alt="" />
          <h1>{item.name}</h1>
          </NavLink >
          <p className="font-semibold text-2xl">
            ${item.price}
          </p>
          <div className=" flex justify-between gap-1 items-center">
          <button className="px-2 py-3 bg-black text-white items-center rounded-lg ">
          Buy Now
          </button>
          <Button onClick={() => handleAddToCart(item)} variant="contained">
            <ShoppingCartIcon />
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
