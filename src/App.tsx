import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './hooks';
import { getAllCategories, getProducts } from './features/productsSlice';
import { RootState } from './store';
import ProductList from './components/ProductList';

import Cart from './components/Cart';
import Header from './components/header/Header';
import { Routes, Route } from 'react-router-dom';
import ProductPage from './components/ProductPage';
import SearchPage from './components/SearchPage';
import NotFoundPage from './components/NotFoundPage';
import Footer from './components/Footer';
import BtnScrollTop from './components/BtnScrollTop';
import AutoScrollToTop from './components/AutoScrollToTop';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import About from './components/About';
import Contacts from './components/Contacts';
import BottomHeader from './components/header/BottomHeader';

function App() {
    const currentTheme = useAppSelector((state) => state.theme.theme);

    useEffect(() => {
        if (currentTheme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [currentTheme]);

    return (
        <div className='flex flex-col justify-between relative bg-stone-50 dark:bg-bg-dark text-text-secondary'>
            <AutoScrollToTop />
            <ToastContainer
                theme={currentTheme === 'dark' ? 'dark' : 'light'}
            />
            <Header />
            <BottomHeader />
            <Routes>
                <Route index element={<ProductList />} />
                <Route path='cart' element={<Cart />} />
                <Route path='product:id' element={<ProductPage />} />
                <Route path='search' element={<SearchPage />} />
                <Route path='about' element={<About />} />
                <Route path='contacts' element={<Contacts />} />
                <Route path='*' element={<NotFoundPage />} />
            </Routes>
            <Footer />
            <BtnScrollTop />
        </div>
    );
}

export default App;
