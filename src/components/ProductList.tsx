import React from 'react';
import { useAppSelector } from '../hooks';
import ProductCard from './ProductCard';

const ProductList: React.FC = () => {
    const allProducts = useAppSelector((state) => state.products.allProducts);
    const filteredByCategoryProducts = useAppSelector(
        (state) => state.products.filteredProducts
    );

    return (
        <div className='grid grid-cols-4 gap-4 px-40 py-20 '>
            {filteredByCategoryProducts.length
                ? filteredByCategoryProducts.map((product) => {
                      return <ProductCard key={product.id} {...product} />;
                  })
                : allProducts.map((product) => {
                      return <ProductCard key={product.id} {...product} />;
                  })}
        </div>
    );
};

export default ProductList;
