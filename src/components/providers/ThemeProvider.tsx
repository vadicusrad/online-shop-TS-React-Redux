import React, { useEffect } from 'react';
import { useAppSelector } from '../../hooks/hooks';

interface IThemeProvider {
    children: JSX.Element;
}

const ThemeProvider = ({ children }: IThemeProvider) => {
    const currentTheme = useAppSelector((state) => state.theme.theme);
    useEffect(() => {
        if (currentTheme === 'dark') {
            return document.documentElement.classList.add('dark');
        }
        return document.documentElement.classList.remove('dark');
    }, [currentTheme]);

    return children;
};

export default ThemeProvider;
