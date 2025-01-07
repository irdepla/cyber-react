import React, { useEffect, useState } from "react";
import { getProducts } from "../../service/productService";
import { useDispatch, useSelector } from "react-redux";
import { addProducts } from "../../store/productSlice";
import WishlistIcon from "../../assets/icons/wishlist-icon.svg";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "../../assets/icons/shopping-cart-icon.svg";
import { Button } from "@mui/material";
import { addToCart } from "../../store/cartSlice";
import { NavLink } from "react-router";
import { toggle } from "../../store/wishlistSlice";

const Card = () => {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.products);
  const wishlist = useSelector((store) => store.wishlist);
  
  const [searchQuery, setSearchQuery] = useState("");

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
  }, [dispatch]);

  function handleToggle(product) {
    dispatch(toggle(product));
  }

  function handleAddToCart(product) {
    dispatch(addToCart(product));
  }

  function isInWishlist(productId) {
    return wishlist.some((item) => item.id === productId);
  }

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="container">
        <input
          type="text"
          placeholder="Search for products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="mb-4 border-black p-2 border rounded"
        />
        <div className="grid grid-cols-2 gap-4">
          {filteredProducts.map((item) => (
            <div className="flex flex-col items-center" key={item.id}>
              <button onClick={() => handleToggle(item)} className="ml-[100px]">
                {isInWishlist(item.id) ? (
                  <FavoriteIcon style={{ color: "red" }} />
                ) : (
                  <img src={WishlistIcon} alt="Wishlist Icon" />
                )}
              </button>
              <NavLink to={`product-details/${item.id}`}>
                <img src={item.image} alt={item.name} />
                <h1>{item.name}</h1>
              </NavLink>
              <p className="font-semibold text-2xl">${item.price}</p>
              <div className="flex justify-between gap-1 items-center">
                <button className="px-2 py-3 bg-black text-white items-center rounded-lg">
                  Buy Now
                </button>
                <Button onClick={() => handleAddToCart(item)}>
                  <img src={ShoppingCartIcon} alt="Add to Cart" />
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
