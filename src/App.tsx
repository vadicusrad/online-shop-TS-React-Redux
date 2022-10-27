import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './hooks';
import { getProducts } from './features/productsSlice';
import { RootState } from './store';
import ProductList from './components/ProductList';
import { getAllCategories } from './features/categoriesSlice';
import CategoriesList from './components/CategoriesList';
import Cart from './components/Cart';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import ProductPage from './components/ProductPage';

function App() {
    // const allProducts = useAppSelector((state) => state.products);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getAllCategories());
        dispatch(getProducts());
    }, [dispatch]);

    return (
        <div>
            <Header />
            <Routes>
                <Route index element={<ProductList />} />
                <Route path='cart' element={<Cart />} />
                <Route path='product:id' element={<ProductPage />} />
            </Routes>
        </div>
    );
}

export default App;
