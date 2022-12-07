import React from 'react';
import { useAppSelector } from '../hooks';
import loadingIcon from '../icons/loadingIcon';
import ProductCard from './ProductCard';
import SortingTools from './SortingTools';

const ProductList: React.FC = () => {
    // const allProducts = useAppSelector((state) => state.products.allProducts);
    const visibleProducts = useAppSelector(
        (state) => state.products.visibleProducts
    );
    const loadingStatus = useAppSelector((state) => state.products.loading);

    return loadingStatus ? (
        <div className='flex justify-center min-h-screen max-h-fit mt-14'>
            {loadingIcon}
        </div>
    ) : (
        <div className='px-5 md:px-10 mt-14'>
            <SortingTools />
            <div className='container mx-auto grid grid-cols-1  sm:grid-cols-2 md:grid-cols-4  lg:grid-cols-4 justify-items-center gap-4 max-w-7xl py-14 min-h-screen max-h-fit'>
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
