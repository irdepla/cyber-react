import React from "react";
import { Navigate, Route, Routes } from "react-router";
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";
import Cart from "../pages/Cart";
import ProductDetails from "../pages/ProductDetails";
import Wishlist from "../pages/Wishlist";
import AdminLayout from "../layouts/AdminLayout";
import Admin from "../pages/Admin";
import AddProducts from "../pages/Admin/AddProducts";
import SignIn from "../pages/SignIn";
import { Login } from "@mui/icons-material";

const Router = () => {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/product-details/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Route>


        <Route path="/login" element={<SignIn/>}/>


        <Route path="/admin" element={<AdminLayout/>}>
        <Route path="" element={localStorage.getItem("token") ? <Admin/> : <Navigate to="/login" /> } ></Route >
        <Route path="addproducts" element={<AddProducts/>} />
        </Route>
      </Routes>
    </>
  );
};

export default Router;
