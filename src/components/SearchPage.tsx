import React from 'react';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../hooks';
import ProductCard from './ProductCard';
import SortingTools from './SortingTools';

const SearchPage: React.FC = () => {
    const searchItems = useAppSelector(
        (state) => state.products.visibleProducts
    );

    return (
        <div className='min-h-screen max-h-fit'>
            {searchItems.length ? (
                <div className='container mx-auto grid grid-cols-4 justify-items-center gap-4 max-w-7xl py-14'>
                    {searchItems.map((product) => {
                        return <ProductCard key={product.id} {...product} />;
                    })}
                </div>
            ) : (
                <div className='flex flex-col items-center mt-12 min-h-screen max-h-fit'>
                    <p className='text-xl text-center mt-8'>
                        Товары не найдены. Попробуйте еще раз с другим запросом.
                    </p>
                    <a
                        className='h-10 w-60 text-white bg-yellow-600 hover:bg-yellow-500 mt-6 flex justify-center items-center rounded-sm'
                        href='/'
                    >
                        Вернуться на главную
                    </a>
                </div>
            )}
        </div>
    );
};

export default SearchPage;
