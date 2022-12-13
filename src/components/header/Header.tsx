import React, { useState, useLayoutEffect, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { Link, useNavigate } from 'react-router-dom';
import { filterBySearchString } from '../../features/productsSlice';
import cartIcon from '../../icons/cartIcon';
import personIcon from '../../icons/personIcon';
import lupeIcon from '../../icons/lupeIcon';
import burger from '../../icons/burger';
import { useScrollBlock } from '../../hooks/useScrollBlock';
import { setTheme } from '../../features/themeSlice';
import BottomHeader from './BottomHeader';
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
