import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks';
import CartListItem from './CartListItem';

const Cart: React.FC = () => {
    const cartItems = useAppSelector((state) => state.cart.order);
    let navigate = useNavigate();
    const cartItemsSumm = () => {
        let sum = 0;
        cartItems.forEach((item) => {
            sum += item.price * item.counter;
        });
        return sum.toFixed(2);
    };

    const cartItemsList = () => {
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
                    <button className='h-10 w-full text-white bg-yellow-600 hover:bg-yellow-500 rounded-sm'>
                        Оформить заказ
                    </button>
                </div>
            </div>
        );
    };

    return (
        <div className='container mx-auto max-w-7xl pt-5 pb-10 min-h-screen px-10 mt-14 md:mt-0'>
            <h1 className='text-3xl md:text-4xl md:text-left md:ml-6 mb-5 '>
                Корзина
            </h1>
            {cartItems.length ? (
                cartItemsList()
            ) : (
                <p className='my-14 text-2xl px-10'>Ваша корзина пуста</p>
            )}
            <button
                onClick={() => navigate(-1)}
                className='h-10 w-44 rounded-sm text-white bg-yellow-600 hover:bg-yellow-500 mb-4'
            >
                Вернуться назад
            </button>
        </div>
    );
};

export default Cart;
