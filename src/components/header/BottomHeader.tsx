import React from 'react';
import { Link } from 'react-router-dom';
import { setTheme } from '../../features/themeSlice';
import { useAppDispatch, useAppSelector } from '../../hooks';
import ThemeToggler from '../ThemeToggler';

const BottomHeader = () => {
    return (
        <div className='hidden text-xs lg:text-base px-5 md:px-20 lg:px-40 h-12 bg-red-300 dark:bg-blue-900  text-white  md:flex items-center space-x-6 font-light md:sticky -top-1 z-30'>
            <Link to='about'>О приложении</Link>
            <Link to='contacts'>Контакты</Link>
            <Link to='delivery'>Доставка</Link>
            <Link to='payment'>Оплата</Link>
            <Link to='personal-area'>Личный кабинет</Link>
            <ThemeToggler />
        </div>
    );
};

export default BottomHeader;
