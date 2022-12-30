import React, { useEffect } from 'react';
import { useAppSelector } from './hooks/hooks';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// components
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import BtnScrollTop from './components/BtnScrollTop';
import BottomHeader from './components/header/BottomHeader';
// hooks
import useAutoScrollToTop from './hooks/useAutoScrollToTop';
import BasePageLayout from './components/BasePageLayout';

function App() {
    useAutoScrollToTop();
    return (
        <div className='flex flex-col justify-between relative bg-stone-50 dark:bg-stone-800 dark:text-gray-400 duration-1000 min-h-screen'>
            <Header />
            <BottomHeader />
            <BasePageLayout />
            <Footer />
            <BtnScrollTop />
        </div>
    );
}

export default App;
