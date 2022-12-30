import React from 'react';
import { ToastContainer } from 'react-toastify';
import { useAppSelector } from '../../hooks/hooks';

interface IToastProvider {
    children: JSX.Element;
}

const ToastProvider = ({ children }: IToastProvider) => {
    const currentTheme = useAppSelector((state) => state.theme.theme);
    return (
        <>
            {children}
            <ToastContainer
                theme={currentTheme === 'dark' ? 'dark' : 'light'}
                position='bottom-right'
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </>
    );
};

export default ToastProvider;
