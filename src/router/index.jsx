import React from 'react';
import { Route, Routes } from 'react-router';
import Home from '../pages/Home';
import MainLayout from '../layouts/mainLayout';
import Cart from '../pages/Cart';
import ProductDetails from '../pages/ProductDetails';
import Wishlist from '../pages/Wishlist';

const Router = () => {
    return (
        <>
        <Routes >
            <Route element={<MainLayout />}>
                <Route path='/' element={<Home />} />
                <Route path='/product-details/:id' element={<ProductDetails />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/wishlist' element={<Wishlist />} />
            </Route>
        </Routes>
        </>
    );
}

export default Router;
