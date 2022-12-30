import React from 'react';
import { setTheme } from '../features/themeSlice';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';

const ThemeToggler = () => {
    const currentTheme = useAppSelector((state) => state.theme.theme);
    const dispatch = useAppDispatch();

    function hadleSwitchTheme() {
        if (currentTheme === 'light') {
            return dispatch(setTheme('dark'));
        }
        return dispatch(setTheme('light'));
    }
    return (
        <label className='inline-flex relative items-center cursor-pointer h-6 w-11'>
            <input
                type='checkbox'
                value=''
                className='sr-only peer'
                onChange={hadleSwitchTheme}
                checked={currentTheme === 'light' ? false : true}
            />
            {/* тело переключателя */}
            <div className="w-11 h-6 shadow-sm bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-stone-700"></div>
        </label>
    );
};

export default ThemeToggler;
