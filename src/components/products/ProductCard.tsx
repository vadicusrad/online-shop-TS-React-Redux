import React from 'react';
import { addItemToCart } from '../../features/cartSlice';
import { Product } from '../../features/productsSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { Link } from 'react-router-dom';
import { Theme, toast } from 'react-toastify';

const ProductCard: React.FC<Product> = (product) => {
    const dispatch = useAppDispatch();

    function handleAdditemInCart() {
        dispatch(addItemToCart(product));
        toast.success('Товар добавлен в корзину', {
            position: 'bottom-right',
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    return (
        <div className='relative bg-white dark:bg-gray-700 h-[300px] dark:bg-card-dark  group w-full sm:w-[200px] md:w-[180px] flex flex-col justify-between hover:shadow-md p-4 overflow-hidden cursor-pointer rounded-sm'>
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
            <div className='absolute bottom-0 left-0  w-full h-0 group-hover:h-20 group-hover:bottom-10 bg-red-400/0  dark:group-hover:bg-gray-700 group-hover:bg-white  duration-300 flex justify-center pt-4'>
                <button
                    onClick={() => handleAdditemInCart()}
                    className='w-4/5 h-[30px] sm:left-[10px]  bg-gray-400 dark:bg-gray-700 text-white no-sens:opacity-100  hover:bg-lime-500 dark:hover:bg-gray-700 dark:hover:text-yellow-500  dark:hover:border dark:hover:border-yellow-600 group-hover:opacity-100 duration-300 rounded-sm'
                >
                    В корзину
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
