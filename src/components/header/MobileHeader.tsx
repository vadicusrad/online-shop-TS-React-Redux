import React, { useState } from 'react';
import { useAppSelector } from '../../hooks/hooks';
import { useScrollBlock } from '../../hooks/useScrollBlock';
import { Link } from 'react-router-dom';
import ThemeToggler from '../ThemeToggler';
import BurgerIcon from '../../icons/BurgerIcon';
import PersonIcon from '../../icons/PersonIcon';
import CartIcon from '../../icons/CartIcon';

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
            <div className='fixed top-0 h-14 w-full bg-red-400 dark:bg-slate-800 duration-500 text-text-light dark:text-text-dark md:hidden flex justify-between items-center px-5 z-30'>
                <a
                    href='/'
                    className='text-xl md:text-5xl text-white cursor-pointer m-2'
                >
                    LOGO
                </a>
                <span
                    className='cursor-pointer text-white'
                    onClick={handleOpenMobNav}
                >
                    <BurgerIcon />
                </span>
            </div>
            {/*Подложка-контейнер для бокового меню */}
            <div
                onClick={handleOpenMobNav}
                className={`fixed top-14 h-screen w-screen bg-black/70 z-50 transition-all duration-500 ${
                    openMobNav ? 'inset-0' : '-inset-full'
                } md:hidden flex justify-end dark:text-white`}
            >
                {/* боковое меню */}
                <div
                    className={`h-screen w-3/4 sm:w-3/5 bg-stone-200 dark:bg-gray-700 transition-all duration-600 overflow-auto 
          
        md:hidden flex flex-col space-y-2 px-10 py-5 pb-20 z-60
        `}
                    onClick={(e) => e.stopPropagation()}
                >
                    <span className='flex justify-between mb-8'>
                        <Link onClick={handleOpenMobNav} to='personal-area'>
                            <PersonIcon />
                        </Link>
                        <Link
                            onClick={handleOpenMobNav}
                            className='relative flex justify-end'
                            to='cart'
                        >
                            <CartIcon />
                            {cartItems.length ? (
                                <span className='absolute top-1 -right-6 rounded-xl bg-lime-500 w-6 h-6 flex justify-center items-center text-white'>
                                    {cartItems.length}
                                </span>
                            ) : null}
                        </Link>
                        <div className='flex justify-end items-center'>
                            <ThemeToggler />
                        </div>
                    </span>

                    <Link onClick={handleOpenMobNav} to='/'>
                        Главная страница
                    </Link>
                    <Link onClick={handleOpenMobNav} to='personal-area'>
                        Личный кабинет
                    </Link>
                    <Link onClick={handleOpenMobNav} to='payment'>
                        Оплата
                    </Link>
                    <Link onClick={handleOpenMobNav} to='delivery'>
                        Доставка
                    </Link>

                    <Link onClick={handleOpenMobNav} to='pick-up-points'>
                        Пункты выдачи
                    </Link>
                    <Link onClick={handleOpenMobNav} to='contacts'>
                        Контакты
                    </Link>
                    <Link onClick={handleOpenMobNav} to='about'>
                        О приложении
                    </Link>
                </div>
            </div>
        </>
    );
};

export default MobileHeader;
