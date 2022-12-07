import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { Link, useNavigate } from 'react-router-dom';
import { filterBySearchString } from '../../features/productsSlice';
import SortingTools from '../SortingTools';
import cartIcon from '../../icons/cartIcon';
import personIcon from '../../icons/personIcon';
import lupeIcon from '../../icons/lupeIcon';
import burger from '../../icons/burger';

const Header: React.FC = () => {
    const cartItems = useAppSelector((state) => state.cart.order);
    const [searchInput, setSearchInput] = useState('');
    // стейт бокового меню на меленьких экранах
    const [openMobNav, setOpenMobNav] = useState(false);
    console.log(openMobNav);

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
                setSearchInput('');
            }
        }
    }
    function handleOpenMobNav() {
        setOpenMobNav(!openMobNav);
    }

    return (
        <>
            {/*Хэдер на маленькиъ экранах */}
            <div className='sticky top-0 h-14 w-full bg-yellow-600 md:hidden text-white flex justify-between items-center px-5 z-30'>
                <a
                    href='/'
                    className='text-xl md:text-5xl text-yellow-800 cursor-pointer m-2'
                >
                    LOGO
                </a>
                <span
                    className='cursor-pointer'
                    onClick={() => handleOpenMobNav()}
                >
                    {burger}
                </span>
            </div>
            {/* Подложка бокового меню */}
            <div
                onClick={() => handleOpenMobNav()}
                className={`absolute h-full w-full top-0 left-0 bg-black opacity-30 z-20 transition-all duration-500 ${
                    openMobNav ? 'block' : 'hidden'
                } md:hidden`}
            ></div>

            {/* Боковое выезжающее меню на маленьких экранах */}
            <div
                className={`fixed h-screen w-2/4 bg-yellow-400 top-14 transition-all duration-500 ${
                    openMobNav ? 'right-0 block' : '-right-3/4'
                }
                md:hidden flex flex-col space-y-2 px-10 py-5 z-30
                `}
            >
                <Link
                    onClick={() => handleOpenMobNav()}
                    className='relative flex justify-end'
                    to='cart'
                >
                    {cartIcon}
                    {cartItems.length ? (
                        <span className='absolute top-1 right-8 rounded-xl bg-lime-500 w-6 h-6 flex justify-center items-center text-white'>
                            {cartItems.length}
                        </span>
                    ) : null}
                </Link>
                <Link onClick={() => handleOpenMobNav()} to='/'>
                    Главная страница
                </Link>
                <Link onClick={() => handleOpenMobNav()} to='personal-area'>
                    Личный кабинет
                </Link>
                <Link onClick={() => handleOpenMobNav()} to='payment'>
                    Оплата
                </Link>
                <Link onClick={() => handleOpenMobNav()} to='delivery'>
                    Доставка
                </Link>

                <Link onClick={() => handleOpenMobNav()} to='pick-up-points'>
                    Пункты выдачи
                </Link>
                <Link onClick={() => handleOpenMobNav()} to='shops'>
                    Магазины
                </Link>
                <Link onClick={() => handleOpenMobNav()} to='return-goods'>
                    Возврат товаров
                </Link>
                <Link onClick={() => handleOpenMobNav()} to='contacts'>
                    Контакты
                </Link>
                <Link onClick={() => handleOpenMobNav()} to='about'>
                    О компании
                </Link>
            </div>
            {/* Меню на больших экранах */}
            <div className='hidden sm:flex flex-col sm:w-full xl:w-[1920px] m-auto text-xs'>
                <div className='hidden md:flex h-10 bg-stone-200 justify-between items-center px-5  md:px-20 lg:px-40 font-light '>
                    <a href='tel:+7 800 800 80 80'>+7 800 800 80 80</a>
                    <span className='flex space-x-4'>
                        <Link to='delivery'>Доставка</Link>
                        <Link to='payment'>Оплата</Link>
                        <Link to='pick-up-points'>Пункты выдачи</Link>
                        <Link to='shops'>Магазины</Link>
                        <Link to='return-goods'>Возврат товаров</Link>
                    </span>
                </div>
                <div className='hidden h-28 bg-stone-100 md:flex justify-between items-center px-5  md:px-20 lg:px-40'>
                    <a
                        href='/'
                        className='text-xl md:text-5xl text-yellow-800 cursor-pointer m-2'
                    >
                        LOGO
                    </a>
                    {/* инпут для поиска */}
                    <span className='relative'>
                        <input
                            className='h-10 w-[200px] md:w-[300px] lg:w-[500px]  bg-stone-200 rounded sm:pl-3 focus:outline-none'
                            type='text'
                            placeholder='Поиск'
                            value={searchInput}
                            onChange={(e) => setSearchInput(e.target.value)}
                            onKeyDown={(e) => onKeyEnter(e.key)}
                        />
                        <span onClick={handleSearchStringChange}>
                            {lupeIcon}
                        </span>
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
                <div className='hidden px-5 md:px-40 h-14 bg-yellow-600 text-white md:flex items-center space-x-6 font-light sticky top-0 opacity-95 z-30'>
                    <Link to='about'>О компании</Link>
                    <Link to='contacts'>Контакты</Link>
                    <Link to='delivery'>Доставка</Link>
                    <Link to='payment'>Оплата</Link>
                    <Link to='personal-area'>Личный кабинет</Link>
                </div>
            </div>
        </>
    );
};

export default Header;
