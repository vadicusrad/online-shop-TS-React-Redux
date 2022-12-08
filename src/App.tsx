import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './hooks';
import { getProducts } from './features/productsSlice';
import { RootState } from './store';
import ProductList from './components/ProductList';
import { getAllCategories } from './features/categoriesSlice';
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
function App() {
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getAllCategories());
        dispatch(getProducts());
    }, [dispatch]);

    return (
        <div className='flex flex-col justify-between relative'>
            <AutoScrollToTop />
            <ToastContainer />
            <Header />
            <Routes>
                <Route index element={<ProductList />} />
                <Route path='cart' element={<Cart />} />
                <Route path='product:id' element={<ProductPage />} />
                <Route path='search' element={<SearchPage />} />
                <Route path='about' element={<About />} />
                <Route path='*' element={<NotFoundPage />} />
            </Routes>
            <Footer />
            <BtnScrollTop />
        </div>
    );
}

export default App;
