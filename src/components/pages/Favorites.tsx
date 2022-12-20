import React from 'react';
import { toast } from 'react-toastify';
import { clearFavorites } from '../../features/favoritesSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import ButtonComponent from '../ButtonComponent';
import LinkComponent from '../LinkComponent';
import ProductCard from '../products/ProductCard';

const Favorites = () => {
    const favoriteItems = useAppSelector((store) => store.favorites.favorites);
    const dispatch = useAppDispatch();

    function handleClearFavorites() {
        dispatch(clearFavorites());
        if (favoriteItems.length) {
            toast.success('Избранное очищено', {
                position: 'bottom-right',
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else {
            return;
        }
    }

    return (
        <div className='container mx-auto max-w-7xl pt-5 pb-10 px-5 md:px-10 mt-14 md:mt-0 dark:text-gray-400'>
            <h1 className='text-3xl md:text-4xl md:text-left md:ml-6 mb-5 '>
                Избранное
            </h1>
            {favoriteItems.length ? (
                favoriteItems.map((product) => {
                    console.log(product);
                    return <ProductCard key={product.id} {...product} />;
                })
            ) : (
                <p className='mt-14 text-xl md:text-2xl px-10 h-52'>
                    Список избранного пуст
                </p>
            )}

            <div className='flex justify-between md:justify-around'>
                <LinkComponent
                    className='text-sm sm:text-base'
                    children='Вернуться назад'
                    to='/'
                />
                <ButtonComponent
                    className='text-sm sm:h-10 sm:text-base'
                    children='Очистить избранное'
                    onClick={() => handleClearFavorites()}
                />
            </div>
        </div>
    );
};

export default Favorites;
