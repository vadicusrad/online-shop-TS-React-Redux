import React from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { clearCart } from '../../features/cartSlice';
import { useAppSelector } from '../../hooks/hooks';
import ButtonComponent from '../ButtonComponent';
import LinkComponent from '../LinkComponent';
import CartItemsList from './CartItemList';

const Cart: React.FC = () => {
    const dispatch = useDispatch();
    const cartItems = useAppSelector((state) => state.cart.order);

    function handleClearCart() {
        dispatch(clearCart());
        if (cartItems.length) {
            return toast.success('Корзина очищена');
        }
        return toast.success('Корзина уже пуста');
    }

    return (
        <div className='mx-auto dark:text-gray-400 '>
            <h1 className='text-3xl'>Корзина</h1>
            {cartItems.length ? (
                <CartItemsList />
            ) : (
                <p className='mt-16 text-lg h-36'>Ваша корзина пуста</p>
            )}

            <div className='flex justify-between sm:justify-start space-x-9 md:space-x-10'>
                <LinkComponent
                    className='text-sm sm:text-base'
                    children='Вернуться назад'
                    to='/'
                />
                <ButtonComponent
                    className='text-sm sm:h-10 sm:text-base'
                    children='Очистить корзину'
                    onClick={() => handleClearCart()}
                />
            </div>
        </div>
    );
};

export default Cart;
