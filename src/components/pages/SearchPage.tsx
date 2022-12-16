import React from 'react';
import { useAppSelector } from '../../hooks/hooks';
import ProductCard from '../products/ProductCard';

const SearchPage: React.FC = () => {
    const searchItems = useAppSelector(
        (state) => state.products.visibleProducts
    );

    return (
        <div className='min-h-screen max-h-fit dark:text-gray-400'>
            {searchItems.length ? (
                <div className='flex flex-col items-center py-14'>
                    <div className='container mx-auto grid grid-cols-4 justify-items-center gap-4 max-w-7xl'>
                        {searchItems.map((product) => {
                            return (
                                <ProductCard key={product.id} {...product} />
                            );
                        })}
                    </div>
                    <a
                        className='flex items-center justify-center h-10 w-fit px-2 rounded-sm bg-gray-400 text-white dark:text-yellow-600 hover:bg-lime-500 dark:bg-inherit dark:hover:border dark:hover:border-yellow-600 mb-4 mt-6 duration-200'
                        href='/'
                    >
                        Вернуться на главную
                    </a>
                </div>
            ) : (
                <div className='flex flex-col items-center mt-12 min-h-screen max-h-fit'>
                    <p className='text-xl text-center mt-8'>
                        Товары не найдены. Попробуйте еще раз c другим запросом.
                    </p>
                    <a
                        className='flex items-center justify-center h-10  px-2 rounded-sm bg-gray-400 text-white dark:text-yellow-600 hover:bg-lime-500 dark:bg-inherit dark:hover:border dark:hover:border-yellow-600 mb-4 mt-6 duration-200'
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
