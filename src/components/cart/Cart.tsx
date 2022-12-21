import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { clearCart } from '../../features/cartSlice';
import { useAppSelector } from '../../hooks/hooks';
import ButtonComponent from '../ButtonComponent';
import LinkComponent from '../LinkComponent';
import CartItemsList from './CartItemList';

const Cart: React.FC = () => {
    const dispatch = useDispatch();
    const cartItems = useAppSelector((state) => state.cart.order);
    // let navigate = useNavigate();

    function handleClearCart() {
        dispatch(clearCart());
        if (cartItems.length) {
            toast.success('Корзина очищена', {
                position: 'bottom-right',
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else {
            toast.success('Корзина уже пуста', {
                position: 'bottom-right',
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }

    return (
        <div className='container mx-auto max-w-7xl pt-5 pb-10 px-5 md:px-10 mt-14 md:mt-0 dark:text-gray-400 '>
            <h1 className='text-3xl md:text-4xl md:text-left md:ml-6 mb-5 '>
                Корзина
            </h1>
            {cartItems.length ? (
                <CartItemsList />
            ) : (
                <p className='mt-16 text-xl md:text-2xl px-10 h-36'>
                    Ваша корзина пуста
                </p>
            )}

            {/* <ButtonComponent
                children='Вернуться назад'
                onClick={() => navigate(-1)}
            /> */}
            <div className='flex justify-between md:justify-around'>
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
