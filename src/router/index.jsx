import React from 'react';
import { Route, Routes } from 'react-router';
import Home from '../pages/Home';
import MainLayout from '../layouts/mainLayout';

const Router = () => {
    return (
        <>
        <Routes >
            <Route element={<MainLayout />}>
                <Route path='/' element={<Home />} />
            </Route>
        </Routes>
        </>
    );
}

export default Router;
