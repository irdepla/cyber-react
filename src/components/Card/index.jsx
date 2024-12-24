import React, { useEffect } from "react";
import { getProducts } from "../../service/productService";
import { useDispatch, useSelector } from "react-redux";

const Card = () => {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.products);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const products = await getProducts();
        console.log(products);
        dispatch(addProducts(products))        
      } catch (error) {
        console.log(error);
      }
    }
    fetchProducts();
  }, []);

  return (
    <>
      <h1>Hello</h1>
    </>
  );
};

export default Card;
