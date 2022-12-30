import React from 'react';
import { useAppSelector } from '../../hooks/hooks';

import ProductCard from './ProductCard';

const ProductList: React.FC = () => {
    const visibleProducts = useAppSelector(
        (state) => state.products.visibleProducts
    );

    return (
        <>
            {visibleProducts.length ? (
                visibleProducts.map((product) => {
                    return <ProductCard key={product.id} {...product} />;
                })
            ) : (
                <div className='flex justify-center min-h-screen max-h-fit mt-14'>
                    <p>Идет обработка элементов</p>
                </div>
            )}
        </>
    );
};

export default ProductList;
