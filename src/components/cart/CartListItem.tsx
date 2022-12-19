import React from 'react';
import { Link } from 'react-router-dom';
import {
    changeCartItemCounterDown,
    changeCartItemCounterUp,
    deleteItemFromCart,
} from '../../features/cartSlice';
import { CartItem } from '../../features/cartSlice';
import { useAppDispatch } from '../../hooks/hooks';

const CartListItem: React.FC<CartItem> = ({
    title,
    price,
    image,
    id,
    counter,
}) => {
    const dispatch = useAppDispatch();

    return (
        <div className='p-4 h-32 relative flex shadow-sm z-10 dark:bg-gray-700 mb-2 md:mr-4'>
            <span
                className='absolute right-3 top-0 cursor-pointer text-slate-500'
                onClick={() => dispatch(deleteItemFromCart(id))}
            >
                x
            </span>
            <img
                className='min-w-[80px] w-[80px] mr-5 md:mr-8 object-contain flex justify-center'
                src={image}
                alt={title}
            />
            <div className='flex flex-col justify-between '>
                <h2 className='font-bold lg:text-xl overflow-hidden '>
                    <Link to={`/product${id}`}>{title}</Link>
                </h2>
                <p className='text-yellow-600 '>${price}</p>
                <div className='  h-7 w-24 text-white flex justify-between rounded-sm'>
                    <button
                        onClick={() => dispatch(changeCartItemCounterUp(id))}
                        className='h-full w-1/3 bg-yellow-600 dark:bg-inherit dark:text-yellow-600 hover:border hover:border-yellow-600 rounded-l-sm'
                    >
                        +
                    </button>
                    <span className='w-1/3 dark:text-gray-400 text-black flex justify-center items-center'>
                        {counter}
                    </span>
                    <button
                        onClick={() => dispatch(changeCartItemCounterDown(id))}
                        className='h-full w-1/3  bg-yellow-600 dark:bg-inherit dark:text-yellow-600 hover:border hover:border-yellow-600 rounded-r-sm'
                    >
                        -
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartListItem;
