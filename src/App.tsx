import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './hooks';
import { getProducts } from './features/productsSlice';
import { RootState } from './store';
import ProductList from './components/ProductList';
import { getAllCategories } from './features/categoriesSlice';

import Cart from './components/Cart';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import ProductPage from './components/ProductPage';
import SearchPage from './components/SearchPage';
import NotFoundPage from './components/NotFoundPage';
import Footer from './components/Footer';
import BtnScrollTop from './components/BtnScrollTop';

function App() {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getAllCategories());
        dispatch(getProducts());
    }, [dispatch]);

    return (
        <div className='flex flex-col justify-between relative'>
            <Header />
            <Routes>
                <Route index element={<ProductList />} />
                <Route path='cart' element={<Cart />} />
                <Route path='product:id' element={<ProductPage />} />
                <Route path='search' element={<SearchPage />} />
                <Route path='*' element={<NotFoundPage />} />
            </Routes>
            <Footer />
            <BtnScrollTop />
        </div>
    );
}

export default App;
