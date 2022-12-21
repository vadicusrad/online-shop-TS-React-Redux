import React from 'react';
import { useAppSelector } from '../../hooks/hooks';
import ButtonComponent from '../ButtonComponent';
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
            <div className='w-full sm:w-[400px] md:w-1/3 bg-stone-200  dark:bg-slate-800  p-6 flex items-center flex-col sticky top-28 mt-5 mb-10 md:m-0 shadow-xl'>
                <span className='text-2xl mb-4 '>
                    Итого к оплате: ${cartItemsSumm()}
                </span>

                <ButtonComponent
                    children='Оформить заказ'
                    onClick={() =>
                        alert(
                            'Далее здесь будет оформление заказа. Функция в разработке.'
                        )
                    }
                />
            </div>
        </div>
    );
};

export default CartItemsList;
