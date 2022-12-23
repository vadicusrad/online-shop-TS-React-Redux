import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Cart from './cart/Cart';
import About from './pages/About';
import Contacts from './pages/Contacts';
import NotFoundPage from './pages/NotFoundPage';
import SearchPage from './pages/SearchPage';
import ProductList from './products/ProductList';
import ProductPage from './products/ProductPage';

const BasePageLayout = () => {
    return (
        <div className='min-h-[600px] px-3 sm:px-6 md:px-10 lg:px-40 w-full lg:w-[1440px] no-sens:w-[1024px] m-auto  pt-20 pb-10 md:py-10 '>
            <Routes>
                <Route index element={<ProductList />} />
                <Route path='cart' element={<Cart />} />
                <Route path='product:id' element={<ProductPage />} />
                <Route path='search' element={<SearchPage />} />
                <Route path='about' element={<About />} />
                <Route path='contacts' element={<Contacts />} />
                <Route path='*' element={<NotFoundPage />} />
            </Routes>
        </div>
    );
};

export default BasePageLayout;
