import React from 'react';
import { useAppSelector } from '../../hooks/hooks';
import LinkComponent from '../LinkComponent';
import ProductCard from '../products/ProductCard';

const SearchPage: React.FC = () => {
    const searchItems = useAppSelector(
        (state) => state.products.visibleProducts
    );

    return (
        <div>
            {searchItems.length ? (
                <div className='flex flex-col items-center'>
                    <h1 className='text-3xl'>Найденные товары</h1>
                    <div className='container mx-auto grid grid-cols-1  sm:grid-cols-2 md:grid-cols-4  lg:grid-cols-5 justify-items-center gap-4 max-w-7xl py-14'>
                        {searchItems.map((product) => {
                            return (
                                <ProductCard key={product.id} {...product} />
                            );
                        })}
                    </div>

                    <LinkComponent to='/' children='Вернуться на главную' />
                </div>
            ) : (
                <div className='flex flex-col items-center'>
                    <p className='text-xl text-center mt-8'>
                        Товары не найдены. Попробуйте еще раз c другим запросом.
                    </p>
                    <LinkComponent to='/' children='Вернуться на главную' />
                </div>
            )}
        </div>
    );
};

export default SearchPage;
