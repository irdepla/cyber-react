import React from 'react';
import { Route, Routes } from 'react-router';
import Home from '../pages/Home';
import MainLayout from '../layouts/mainLayout';
import Cart from '../pages/Cart';
import ProductDetails from '../pages/ProductDetails';

const Router = () => {
    return (
        <>
        <Routes >
            <Route element={<MainLayout />}>
                <Route path='/' element={<Home />} />
                <Route path='/product-details/:id' element={<ProductDetails />} />
                <Route path='/cart' element={<Cart />} />
            </Route>
        </Routes>
        </>
    );
}

export default Router;
