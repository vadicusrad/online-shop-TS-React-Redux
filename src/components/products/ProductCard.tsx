import React from 'react';
import { addItemToCart } from '../../features/cartSlice';
import {
    AdaptedProduct,
    toggleFavoriteProduct,
} from '../../features/productsSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import ButtonComponent from '../ButtonComponent';

const ProductCard: React.FC<AdaptedProduct> = (product) => {
    const dispatch = useAppDispatch();

    function handleAdditemInCart() {
        dispatch(addItemToCart(product));
        toast.success('Товар добавлен в корзину');
    }

    return (
        <div className='relative bg-white dark:bg-gray-700 h-[300px] dark:bg-card-dark  group w-full sm:w-[200px] md:w-[180px] flex flex-col justify-between hover:shadow-md p-4 overflow-hidden md:cursor-pointer rounded-sm '>
            <Link
                to={`product${product.id}`}
                className='flex flex-col items-center justify-between h-full'
            >
                <img
                    className='w-40  object-contain h-[150px] min-h-[150px]'
                    src={product.image}
                    alt={product.title}
                />
                <div className='h-full flex flex-col justify-between overflow-hidden'>
                    <span className='text-ellipsis overflow-hidden ... w-full  mt-4 dark:text-gray-400'>
                        {product.title}
                    </span>
                    <span className='text-left w-full mt-2 font-bold dark:text-gray-200'>
                        ${product.price}
                    </span>
                </div>
            </Link>
            <div
                className='absolute m-0 h-fit bottom-0 right-5 md:w-full md:bottom-0 md:left-0 md:h-0 md:group-hover:h-20 md:group-hover:bottom-10 bg-red-400/0  dark:group-hover:bg-gray-700 group-hover:bg-white  duration-300 flex justify-center
                    sm:-bottom-2 sm:right-2 
                '
            >
                <ButtonComponent
                    onClick={() => handleAdditemInCart()}
                    children='В корзину'
                    className='sm:h-8'
                />
            </div>
        </div>
    );
};

export default ProductCard;
