import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './hooks';
import { getProducts } from './features/productsSlice';
import { RootState } from './store';
import ProductList from './components/ProductList';
import { getAllCategories } from './features/categoriesSlice';
import CategoriesList from './components/CategoriesList';
import Cart from './components/Cart';
import Header from './components/Header';

function App() {
    const allProducts = useAppSelector((state) => state.products);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(getAllCategories());
        dispatch(getProducts());
    }, [dispatch]);

    return (
        <div className=''>
            <Header />
            <ProductList />
            <hr />
            <CategoriesList />
            <hr />
            <Cart />
        </div>
    );
}

export default App;
