import React from 'react';
import { Link } from 'react-router-dom';
import {
    changeCartItemCounterDown,
    changeCartItemCounterUp,
    deleteItemFromCart,
} from '../../features/cartSlice';
import { CartItem } from '../../features/cartSlice';
import { useAppDispatch } from '../../hooks/hooks';
import CloseIcon from '../../icons/CloseIcon';

const CartListItem: React.FC<CartItem> = ({
    title,
    price,
    image,
    id,
    counter,
}) => {
    const dispatch = useAppDispatch();

    return (
        <div className='md:mr-2 pl-3 pr-8 py-2 h-32 relative flex shadow-sm z-10 dark:bg-gray-700 mb-2'>
            <span
                className='absolute right-1 top-1 cursor-pointer text-slate-400 hover:text-yellow-600'
                onClick={() => dispatch(deleteItemFromCart(id))}
            >
                <CloseIcon />
            </span>
            <img
                className='min-w-[80px] w-[80px] mr-3 md:mr-8 object-cover flex justify-center'
                src={image}
                alt={title}
            />
            <div className='flex flex-col justify-between '>
                <h2 className='font-bold lg:text-xl overflow-hidden h-[3rem]'>
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
