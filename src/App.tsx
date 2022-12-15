import React, { useEffect } from 'react';
import { useAppSelector } from './hooks/hooks';
import ProductList from './components/products/ProductList';
import Cart from './components/cart/Cart';
import Header from './components/header/Header';
import { Routes, Route } from 'react-router-dom';
import ProductPage from './components/products/ProductPage';
import SearchPage from './components/pages/SearchPage';
import NotFoundPage from './components/pages/NotFoundPage';
import Footer from './components/footer/Footer';
import BtnScrollTop from './components/BtnScrollTop';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import About from './components/pages/About';
import Contacts from './components/pages/Contacts';
import BottomHeader from './components/header/BottomHeader';
import useAutoScrollToTop from './hooks/useAutoScrollToTop';

function App() {
    const currentTheme = useAppSelector((state) => state.theme.theme);

    useEffect(() => {
        if (currentTheme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [currentTheme]);

    useAutoScrollToTop();
    return (
        <div className='flex flex-col justify-between relative bg-stone-50 dark:bg-stone-800 text-text-secondary'>
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
