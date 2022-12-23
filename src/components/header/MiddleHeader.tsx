import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { filterBySearchString } from '../../features/productsSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { useScrollBlock } from '../../hooks/useScrollBlock';
import cartIcon from '../../icons/cartIcon';
import lupeIcon from '../../icons/lupeIcon';
import personIcon from '../../icons/personIcon';

const MiddleHeader = () => {
    // стейт для инпута поиска
    const [searchInput, setSearchInput] = useState('');

    let navigate = useNavigate();
    const dispatch = useAppDispatch();

    // переменная для хранения продуктов из корзины
    const cartItems = useAppSelector((state) => state.cart.order);

    // функция запускает фильтрацию по строке при нажатии на Ентер
    function onKeyEnter(eKey: string) {
        if (eKey === 'Enter') {
            if (searchInput.length) {
                dispatch(filterBySearchString(searchInput));
                navigate('search');
                setSearchInput('');
            }
        }
    }
    // функция запускает фильтрацию по строке при клике на значок поиска
    function handleSearchStringChange() {
        if (searchInput.length) {
            dispatch(filterBySearchString(searchInput));
            navigate('search');
            setSearchInput('');
        }
    }

    return (
        <div className='bg-stone-200 dark:bg-stone-700 text-text-secondary hidden h-28 md:flex justify-between items-center px-5  md:px-20 lg:px-40 '>
            <a
                href='/'
                className='text-xl md:text-5xl text-lime-500 dark:text-yellow-600 cursor-pointer m-2'
            >
                LOGO
            </a>
            {/* инпут для поиска */}
            <span className='relative'>
                <input
                    className='h-10 w-[200px] md:w-[300px] lg:w-[500px] border-text-secondary border-[1px] bg-bg-light dark:bg-slate-600 dark:text-gray-400 dark:border-none text-text-secondary rounded sm:pl-3 focus:outline-none'
                    type='text'
                    placeholder='Поиск'
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    onKeyDown={(e) => onKeyEnter(e.key)}
                />
                <span
                    className='dark:text-yellow-600'
                    onClick={handleSearchStringChange}
                >
                    {lupeIcon}
                </span>
            </span>
            <span className='flex space-x-4 dark:text-yellow-600'>
                <Link className='text-text-dark' to='personal-area'>
                    {personIcon}
                </Link>
                <Link className='relative text-text-dark' to='cart'>
                    {cartIcon}
                    {cartItems.length ? (
                        <span className='absolute top-1 left-8 rounded-xl bg-lime-500 w-6 h-6 flex justify-center items-center text-white'>
                            {cartItems.length}
                        </span>
                    ) : null}
                </Link>
            </span>
        </div>
    );
};

export default MiddleHeader;
