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
        <div className='flex flex-col md:flex-row items-center md:items-start min-h-screen max-h-fit'>
            <div className='md:w-2/3'>
                {cartItems &&
                    cartItems.map((item) => {
                        return <CartListItem {...item} key={item.id} />;
                    })}
            </div>
            <div className='w-full sm:w-[400px] md:w-1/3 bg-slate-200 p-6 flex items-center flex-col sticky top-28 mt-5 mb-10 md:m-0'>
                <span className='text-2xl mb-4 '>
                    Итого к оплате: ${cartItemsSumm()}
                </span>
                <button className='h-10 w-44 rounded-sm text-white bg-main-dark hover:bg-yellow-500 mb-4 mt-6'>
                    Оформить заказ
                </button>
            </div>
        </div>
    );
};

export default CartItemsList;
