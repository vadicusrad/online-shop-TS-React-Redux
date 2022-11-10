import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { useScrollBlock } from '../hooks/useScrollBlock';
import CategoriesList from './CategoriesList';
import { Link } from 'react-router-dom';
import { filterBySearchString, sortProducts } from '../features/productsSlice';
import SortingTools from './SortingTools';

const Header: React.FC = () => {
    const cartItems = useAppSelector((state) => state.cart.order);
    const [categoryModal, setCategoryModal] = useState<boolean>(false);
    const [searchInput, setSearchInput] = useState('');
    const [blockScroll, allowScroll] = useScrollBlock();

    const onCloseModal = () => {
        setCategoryModal(false);
        allowScroll();
    };
    const onOpenModal = () => {
        setCategoryModal(true);
        blockScroll();
    };

    const dispatch = useAppDispatch();

    function handleSearchStringChange() {
        console.log(searchInput);
        dispatch(filterBySearchString(searchInput));
        // sortProducts('');
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
                    />
                    <Link to='search' onClick={handleSearchStringChange}>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth='1.5'
                            stroke='currentColor'
                            className='w-6 h-6 absolute top-2 right-5 text-yellow-600'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
                            />
                        </svg>
                    </Link>
                </span>
                <span className='flex'>
                    <Link to='personal-area'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth='1.5'
                            stroke='currentColor'
                            className='w-8 h-8  cursor-pointer mx-6'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z'
                            />
                        </svg>
                    </Link>
                    <Link className='relative' to='cart'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth='1.5'
                            stroke='currentColor'
                            className='w-8 h-8  cursor-pointer'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z'
                            />
                        </svg>
                        {cartItems.length ? (
                            <span className='absolute top-1 left-8 rounded-xl bg-lime-500 w-6 h-6 flex justify-center items-center text-white'>
                                {cartItems.length}
                            </span>
                        ) : null}
                    </Link>
                </span>
            </div>
            <div className='px-40 h-14 bg-yellow-600 text-white flex items-center space-x-6 font-light'>
                <button
                    onClick={() => {
                        onOpenModal();
                    }}
                    className='bg-yellow-500 h-full px-4 flex items-center space-x-2 '
                >
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        className='w-6 h-6'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
                        />
                    </svg>
                    <span className='font-normal'>Каталог</span>
                </button>
                <a href='about'>О компании</a>
                <a href='contacts'>Контакты</a>
                <a href='delivery'>Доставка</a>
                <a href='payment'>Оплата</a>
                <a href='personal-area'>Личный кабинет</a>
            </div>
            <SortingTools />
            {categoryModal && <CategoriesList onCloseModal={onCloseModal} />}
        </>
    );
};

export default Header;
