import React from 'react';
import { useAppSelector } from '../hooks';
import ProductCard from './ProductCard';

const SearchPage: React.FC = () => {
    const searchItems = useAppSelector(
        (state) => state.products.filteredProducts
    );

    return (
        <>
            {searchItems.length ? (
                <div className='container mx-auto grid grid-cols-4 justify-items-center gap-4 max-w-7xl py-14'>
                    {searchItems.map((product) => {
                        return <ProductCard key={product.id} {...product} />;
                    })}
                </div>
            ) : (
                <p className='text-xl text-center mt-8'>
                    Товары не найдены. Попробуйте еще раз с другим запросом.
                </p>
            )}
        </>
    );
};

export default SearchPage;
