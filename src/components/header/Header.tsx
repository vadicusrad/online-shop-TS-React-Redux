import React, { useState, useLayoutEffect, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { Link, useNavigate } from 'react-router-dom';
import { filterBySearchString } from '../../features/productsSlice';
import cartIcon from '../../icons/cartIcon';
import personIcon from '../../icons/personIcon';
import lupeIcon from '../../icons/lupeIcon';
import burger from '../../icons/burger';
import { useScrollBlock } from '../../hooks/useScrollBlock';
import { toggleTheme } from '../../features/themeSlice';

const Header: React.FC = () => {
    const cartItems = useAppSelector((state) => state.cart.order);
    const currentTheme = useAppSelector((state) => state.theme.theme);
    const [searchInput, setSearchInput] = useState('');
    // стейт бокового меню на меленьких экранах
    const [openMobNav, setOpenMobNav] = useState(false);
    // хук для блокировки скролла при открытом меню на мобилке
    const [blockScroll, allowScroll] = useScrollBlock();

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
        openMobNav ? allowScroll() : blockScroll();
    }

    function hadleSwitchTheme() {
        if (currentTheme === 'light') {
            dispatch(toggleTheme('dark'));
        } else {
            dispatch(toggleTheme('light'));
        }
    }

    return (
        <>
            {/*Хэдер на маленькиъ экранах */}
            <div
                className={`fixed top-0 h-14 w-full bg-main-light dark:bg-main-dark text-text-light dark:text-text-dark md:hidden flex justify-between items-center px-5 z-30`}
            >
                <a
                    href='/'
                    className='text-xl md:text-5xl text-white cursor-pointer m-2'
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
                className={`absolute h-full w-full top-0 left-0 bg-dark-glass opacity-30 z-20 transition-all duration-500 ${
                    openMobNav ? 'block' : 'hidden'
                } md:hidden`}
            ></div>

            {/* Боковое выезжающее меню на маленьких экранах */}
            <div
                className={`fixed h-screen w-3/4 sm:w-2/4 bg-main-light dark:bg-main-dark text-text-light dark:text-text-dark top-14 transition-all duration-500 overflow-auto pb-20 ${
                    openMobNav ? 'right-0 block' : '-right-3/4'
                }
                md:hidden flex flex-col space-y-2 px-10 py-5 pb-10 z-30
                `}
            >
                <span className='flex justify-between mb-8'>
                    <Link onClick={() => handleOpenMobNav()} to='personal-area'>
                        {personIcon}
                    </Link>
                    <Link
                        onClick={() => handleOpenMobNav()}
                        className='relative flex justify-end'
                        to='cart'
                    >
                        {cartIcon}
                        {cartItems.length ? (
                            <span className='absolute top-1 -right-6 rounded-xl bg-lime-500 w-6 h-6 flex justify-center items-center text-white'>
                                {cartItems.length}
                            </span>
                        ) : null}
                    </Link>
                </span>

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
                    О нас
                </Link>
            </div>
            {/* Меню на больших экранах */}
            <div className='hidden sm:flex flex-col sm:w-full xl:w-[1900px] m-auto text-xs'>
                <div className='hidden md:flex h-10 bg-main-light dark:bg-main-dark text-text-light dark:text-text-dark justify-between items-center px-5  md:px-20 lg:px-40 font-light '>
                    <a href='tel:+7 800 800 80 80'>+7 800 800 80 80</a>
                    <span className='flex space-x-4'>
                        <Link to='delivery'>Доставка</Link>
                        <Link to='payment'>Оплата</Link>
                        <Link to='pick-up-points'>Пункты выдачи</Link>
                        <Link to='shops'>Магазины</Link>
                        <Link to='return-goods'>Возврат товаров</Link>
                    </span>
                </div>
                <div className='text-text-secondary hidden h-28 bg-stone-100 md:flex justify-between items-center px-5  md:px-20 lg:px-40'>
                    <a
                        href='/'
                        className='text-xl md:text-5xl text-accent-light dark:text-accent-dark cursor-pointer m-2'
                    >
                        LOGO
                    </a>
                    {/* инпут для поиска */}
                    <span className='relative'>
                        <input
                            className='h-10 w-[200px] md:w-[300px] lg:w-[500px] border-text-secondary border-[1px] bg-bg-light text-text-secondary rounded sm:pl-3 focus:outline-none'
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
                <div className='px-5 md:px-40 h-14 bg-main-light dark:bg-color-dark text-text-light  md:flex items-center space-x-6 font-light md:sticky md:top-0 opacity-95 z-30'>
                    <Link to='about'>О компании</Link>
                    <Link to='contacts'>Контакты</Link>
                    <Link to='delivery'>Доставка</Link>
                    <Link to='payment'>Оплата</Link>
                    <Link to='personal-area'>Личный кабинет</Link>

                    <label className='inline-flex relative items-center cursor-pointer'>
                        <input
                            type='checkbox'
                            value=''
                            className='sr-only peer'
                            onChange={hadleSwitchTheme}
                            checked={currentTheme === 'light' ? false : true}
                        />
                        <div className="w-11 h-6 bg-bg-dark peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-dark-glass peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-bg-light after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-main-dark"></div>
                        <span className='ml-3 text-sm font-medium text-gray-900 dark:text-gray-300'>
                            Темный режим
                        </span>
                    </label>
                </div>
            </div>
        </>
    );
};

export default Header;
