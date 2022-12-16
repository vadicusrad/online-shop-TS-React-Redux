import React from 'react';
import TopHeader from './TopHeader';
import MiddleHeader from './MiddleHeader';
import MobileHeader from './MobileHeader';

const Header: React.FC = () => {
    return (
        <>
            {/*Хэдер и боковое меню на маленьких экранах */}
            <MobileHeader />
            {/* Хэдер на больших экранах */}
            <div className='hidden md:flex flex-col md:w-full xl:w-[1900px] m-auto text-xs relative'>
                <TopHeader />
                <MiddleHeader />
            </div>
        </>
    );
};

export default Header;
