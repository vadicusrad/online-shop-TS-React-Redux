import React, { useEffect } from 'react';
import { getAllCategories, getProducts } from '../../features/productsSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import loadingIcon from '../../icons/loadingIcon';
import ProductCard from './ProductCard';
import SortingTools from '../SortingTools';

const ProductList: React.FC = () => {
    const visibleProducts = useAppSelector(
        (state) => state.products.visibleProducts
    );
    const loadingStatus = useAppSelector((state) => state.products.loading);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(getAllCategories());
        dispatch(getProducts());
    }, [dispatch]);

    return loadingStatus ? (
        <div className='flex justify-center min-h-screen max-h-fit mt-14'>
            {loadingIcon}
        </div>
    ) : (
        <div className='md:mt-0'>
            <SortingTools />
            <div className='container mx-auto grid grid-cols-1  sm:grid-cols-2 md:grid-cols-4  lg:grid-cols-5 justify-items-center gap-4 max-w-7xl py-14'>
                {visibleProducts.length ? (
                    visibleProducts.map((product) => {
                        return <ProductCard key={product.id} {...product} />;
                    })
                ) : (
                    <p>Товары не найдены</p>
                )}
            </div>
        </div>
    );
};

export default ProductList;
