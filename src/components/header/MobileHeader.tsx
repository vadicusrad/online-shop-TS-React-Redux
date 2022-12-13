import React, { useState } from 'react';
import { useAppSelector } from '../../hooks';
import { useScrollBlock } from '../../hooks/useScrollBlock';
import burger from '../../icons/burger';
import cartIcon from '../../icons/cartIcon';
import personIcon from '../../icons/personIcon';
import { Link } from 'react-router-dom';

const MobileHeader = () => {
    const [openMobNav, setOpenMobNav] = useState(false);
    const [blockScroll, allowScroll] = useScrollBlock();
    const cartItems = useAppSelector((state) => state.cart.order);
    function handleOpenMobNav() {
        setOpenMobNav(!openMobNav);
        openMobNav ? allowScroll() : blockScroll();
    }
    return (
        <>
            {/*Хэдер для маленьких экранов*/}
            <div
                className={`fixed top-0 h-14 w-full bg-amber-400 dark:bg-main-dark text-text-light dark:text-text-dark md:hidden flex justify-between items-center px-5 z-70`}
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
            {/*Подложка для бокового меню */}
            <div
                onClick={() => handleOpenMobNav()}
                className={`fixed top-14 h-screen w-screen bg-black/40 z-50 transition-all duration-500 ${
                    openMobNav ? 'inset-0' : 'inset-full'
                } md:hidden`}
            >
                {/* боковое меню */}
                <div
                    className={`fixed h-screen w-3/4 sm:w-2/4 bg-yellow-300 top-14 transition-all duration-500 overflow-auto 
            // ${openMobNav ? 'right-0 block' : '-right-3/4'}
        md:hidden flex flex-col space-y-2 px-10 py-5 pb-10 z-60 opacity-100
        `}
                    onClick={(e) => e.stopPropagation()}
                >
                    <span className='flex justify-between mb-8'>
                        <Link
                            onClick={() => handleOpenMobNav()}
                            to='personal-area'
                        >
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

                    <Link
                        onClick={() => handleOpenMobNav()}
                        to='pick-up-points'
                    >
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
            </div>
        </>
    );
};

export default MobileHeader;
