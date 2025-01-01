import React from "react";
import cyberLogo from "../../assets/icons/cyber-logo.svg";
import ShoppingCartIcon from "../../assets/icons/shopping-cart-icon.svg";
import WishlistIcon from "../../assets/icons/wishlist-icon.svg";
import { Button } from "@mui/material";
import { NavLink } from "react-router";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartLength = useSelector((store) => store.cart.length);
  const wishlistLength = useSelector((store) => store.wishlist.length);

  return (
    <>
      <nav className="nav border">
        <div className="container">
          <div className="nav__wrapper py-8 px-4 flex justify-between items-center">
            <div className="nav__logo">
              <NavLink to="/">
                <img src={cyberLogo} alt="" />
              </NavLink>
            </div>
            <Button>
              <NavLink className="relative" to="/cart">
                <img src={ShoppingCartIcon} alt="" />
                <div className="bg-red-800 absolute text-white left-[20px] top-[15px] w-[25px] rounded-[30px]">
                  {cartLength > 0 && cartLength}
                </div>
              </NavLink>
            </Button>

            <Button>
              <NavLink className="relative" to="/wishlist">
                <img src={WishlistIcon} alt="" />
                <div className="bg-red-800 absolute text-white left-[20px] top-[15px] w-[25px] rounded-[30px]">
                  {wishlistLength > 0 && wishlistLength}
                </div>
              </NavLink>
            </Button>
            <button className="flex flex-col gap-[5px]">
              <span className="w-[25px]  border border-black"></span>
              <span className="w-[25px] border border-black"></span>
              <span className="w-[25px] border border-black"></span>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
