import React from 'react';
import { Link } from 'react-router-dom';

const TopHeader = () => {
    return (
        <div className='hidden md:flex h-7 bg-white dark:bg-main-dark text-black dark:text-text-dark justify-between items-center px-5  md:px-20 lg:px-40 font-light '>
            <a href='tel:+7 800 800 80 80'>+7 800 800 80 80</a>
            <span className='flex space-x-4'>
                <Link to='delivery'>Доставка</Link>
                <Link to='payment'>Оплата</Link>
                <Link to='pick-up-points'>Пункты выдачи</Link>
                <Link to='shops'>Магазины</Link>
                <Link to='return-goods'>Возврат товаров</Link>
            </span>
        </div>
    );
};

export default TopHeader;
