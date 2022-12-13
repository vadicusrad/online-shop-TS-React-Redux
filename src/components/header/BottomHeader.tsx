import React from 'react';
import { Link } from 'react-router-dom';
import { setTheme } from '../../features/themeSlice';
import { useAppDispatch, useAppSelector } from '../../hooks';

const BottomHeader = () => {
    const currentTheme = useAppSelector((state) => state.theme.theme);
    const dispatch = useAppDispatch();

    function hadleSwitchTheme() {
        if (currentTheme === 'light') {
            dispatch(setTheme('dark'));
        } else {
            dispatch(setTheme('light'));
        }
    }

    return (
        <div className='hidden text-xs lg:text-base px-5 md:px-20 lg:px-40 h-12 bg-red-300 dark:bg-blue-900  text-white  md:flex items-center space-x-6 font-light md:sticky -top-1 z-30'>
            <Link to='about'>О приложении</Link>
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
    );
};

export default BottomHeader;
