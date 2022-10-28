import React from 'react';
import { useAppSelector } from '../hooks';
import ProductCard from './ProductCard';

const ProductList: React.FC = () => {
    const allProducts = useAppSelector((state) => state.products.allProducts);
    const filteredByCategoryProducts = useAppSelector(
        (state) => state.products.filteredProducts
    );

    return (
        <div className='px-40 py-20 '>
            <div className='container mx-auto grid grid-cols-4 justify-items-center gap-4 max-w-7xl '>
                {filteredByCategoryProducts.length
                    ? filteredByCategoryProducts.map((product) => {
                          return <ProductCard key={product.id} {...product} />;
                      })
                    : allProducts.map((product) => {
                          return <ProductCard key={product.id} {...product} />;
                      })}
            </div>
        </div>
    );
};

export default ProductList;
