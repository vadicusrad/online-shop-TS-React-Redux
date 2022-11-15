import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { Link, useNavigate } from 'react-router-dom';
import {
    filterByCurrentCategory,
    filterBySearchString,
    sortProducts,
} from '../features/productsSlice';
import SortingTools from './SortingTools';
import cartIcon from '../icons/cartIcon';
import personIcon from '../icons/personIcon';

const Header: React.FC = () => {
    const cartItems = useAppSelector((state) => state.cart.order);
    const [searchInput, setSearchInput] = useState('');

    let navigate = useNavigate();
    const dispatch = useAppDispatch();

    function handleSearchStringChange() {
        if (searchInput.length) {
            dispatch(filterBySearchString(searchInput));
            navigate('search');
        }
    }

    function onKeyEnter(eKey: string) {
        if (eKey === 'Enter') {
            if (searchInput.length) {
                dispatch(filterBySearchString(searchInput));
                navigate('search');
            }
        }
    }

    return (
        <>
            <div className=' h-10 bg-stone-200 flex justify-between items-center px-40 font-light '>
                <a href='tel:+7 800 800 80 80'>+7 800 800 80 80</a>
                <span className='flex space-x-4'>
                    <a href='delivery'>Доставка</a>
                    <a href='payment'>Оплата</a>
                    <a href='pick-up-points'>Пункты выдачи</a>
                    <a href='shops'>Магазины</a>
                    <a href='return-goods'>Возврат товаров</a>
                </span>
            </div>
            <div className='h-28 bg-stone-100 flex justify-between items-center px-40 '>
                <a
                    href='/'
                    className='text-5xl text-yellow-800 cursor-pointer m-2'
                >
                    LOGO
                </a>
                <span className='relative'>
                    <input
                        className='h-10 w-[600px] bg-stone-200 rounded pl-3 focus:outline-none'
                        type='text'
                        placeholder='Поиск'
                        onChange={(e) => setSearchInput(e.target.value)}
                        onKeyDown={(e) => onKeyEnter(e.key)}
                    />

                    <svg
                        onClick={handleSearchStringChange}
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        className='w-6 h-6 absolute top-2 right-5 text-yellow-600 cursor-pointer '
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
                        />
                    </svg>
                </span>
                <span className='flex'>
                    <Link to='personal-area'>{personIcon}</Link>
                    <Link className='relative' to='cart'>
                        {cartIcon}
                        {cartItems.length ? (
                            <span className='absolute top-1 left-8 rounded-xl bg-lime-500 w-6 h-6 flex justify-center items-center text-white'>
                                {cartItems.length}
                            </span>
                        ) : null}
                    </Link>
                </span>
            </div>
            <div className='px-40 h-14 bg-yellow-600 text-white flex items-center space-x-6 font-light sticky top-0 opacity-95'>
                <a href='about'>О компании</a>
                <a href='contacts'>Контакты</a>
                <a href='delivery'>Доставка</a>
                <a href='payment'>Оплата</a>
                <a href='personal-area'>Личный кабинет</a>
            </div>
            <SortingTools />
        </>
    );
};

export default Header;
