import React from 'react';
import { useAppSelector } from '../../hooks/hooks';
import CartListItem from './CartListItem';

const CartItemsList = () => {
    const cartItems = useAppSelector((state) => state.cart.order);
    const cartItemsSumm = () => {
        let sum = 0;
        cartItems.forEach((item) => {
            sum += item.price * item.counter;
        });
        return sum.toFixed(2);
    };

    return (
        <div className='flex flex-col md:flex-row items-center md:items-start'>
            <div className='md:w-2/3'>
                {cartItems &&
                    cartItems.map((item) => {
                        return <CartListItem {...item} key={item.id} />;
                    })}
            </div>
            <div className='w-full sm:w-[400px] md:w-1/3 bg-stone-200  dark:bg-slate-800  p-6 flex items-center flex-col sticky top-28 mt-5 mb-10 md:m-0'>
                <span className='text-2xl mb-4 '>
                    Итого к оплате: ${cartItemsSumm()}
                </span>
                <button className='h-10 w-44 rounded-sm bg-gray-400 text-white dark:text-yellow-600 hover:bg-lime-500 dark:bg-inherit dark:hover:border dark:hover:border-yellow-600 mb-4 mt-6'>
                    Оформить заказ
                </button>
            </div>
        </div>
    );
};

export default CartItemsList;
