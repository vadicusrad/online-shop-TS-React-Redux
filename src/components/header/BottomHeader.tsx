import React from 'react';
import { Link } from 'react-router-dom';
import ThemeToggler from '../ThemeToggler';

const BottomHeader = () => {
    return (
        <div className='hidden text-xs lg:text-base px-5 md:px-20 lg:px-40 h-12 bg-red-400 dark:bg-slate-800  text-white justify-between  md:flex items-center space-x-6 font-light md:sticky -top-1 z-30 opacity-95'>
            <span className='flex md:flex items-center space-x-6'>
                <Link to='about'>О приложении</Link>
                <Link to='contacts'>Контакты</Link>
                <Link to='personal-area'>Личный кабинет</Link>
            </span>

            <ThemeToggler />
        </div>
    );
};

export default BottomHeader;
