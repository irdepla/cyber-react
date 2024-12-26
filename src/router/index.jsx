import React from 'react';
import { Route, Routes } from 'react-router';
import Home from '../pages/Home';
import MainLayout from '../layouts/mainLayout';
import Cart from '../pages/Cart';

const Router = () => {
    return (
        <>
        <Routes >
            <Route element={<MainLayout />}>
                <Route path='/' element={<Home />} />
                <Route path='/cart' element={<Cart />} />
            </Route>
        </Routes>
        </>
    );
}

export default Router;
