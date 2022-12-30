import React, { useEffect } from 'react';
import { getAllCategories, getProducts } from '../../features/productsSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import LoadingIcon from '../../icons/LoadingIcon';
import SortingTools from '../SortingTools';

import ProductList from './ProductList';

const ProductListWrapper = () => {
    const loadingStatus = useAppSelector((state) => state.products.loading);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getAllCategories());
        dispatch(getProducts());
    }, [dispatch]);

    return loadingStatus ? (
        <div className='flex justify-center min-h-screen max-h-fit mt-14'>
            <LoadingIcon />
        </div>
    ) : (
        <>
            <SortingTools />
            <div className=' md:mt-0 container mx-auto grid grid-cols-1  sm:grid-cols-2 md:grid-cols-4  lg:grid-cols-5 justify-items-center gap-4 max-w-7xl py-14'>
                <ProductList />
            </div>
        </>
    );
};

export default ProductListWrapper;
