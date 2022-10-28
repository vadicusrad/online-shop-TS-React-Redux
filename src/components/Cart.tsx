import React from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import CartListItem from './CartListItem';

const Cart: React.FC = () => {
    const dispatch = useAppDispatch();
    const cartItems = useAppSelector((state) => state.cart.order);

    const cartItemsSumm = () => {
        let sum = 0;
        cartItems.forEach((item) => {
            sum += item.price * item.counter;
        });
        return sum.toFixed(2);
    };

    const cartItemsList = () => {
        return (
            <div className='flex items-start'>
                <div className='w-2/3'>
                    {cartItems &&
                        cartItems.map((item) => {
                            return <CartListItem {...item} key={item.id} />;
                        })}
                </div>
                <div className='w-1/3 bg-slate-200 p-6 flex items-center flex-col '>
                    <span className='text-2xl mb-4'>
                        Итого к оплате: ${cartItemsSumm()}
                    </span>
                    <button className='h-10 w-full text-white bg-yellow-600 hover:bg-yellow-500 rounded-sm'>
                        Оформить заказ
                    </button>
                </div>
            </div>
        );
    };

    return (
        <div className='container mx-auto max-w-7xl py-10'>
            <h1 className='text-4xl mb-4'>Корзина</h1>
            {cartItems.length ? (
                cartItemsList()
            ) : (
                <p className='mt-14'>Ваша корзина пуста</p>
            )}
        </div>
    );
};

export default Cart;
