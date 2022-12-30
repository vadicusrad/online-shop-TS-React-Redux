import React, { useEffect, useState } from 'react';
import UpArrow from '../icons/UpArrow';

const BtnScrollTop: React.FC = () => {
    //динамически добавляемые стили для кнопки вверх
    const [upperButtonVisible, setUpperButtonVisible] = useState(
        'opacity-0 -right-10'
    );

    // функция плавного возврата на верх страницы
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    }
    // слушатель положения скролла на странице
    useEffect(() => {
        window.addEventListener('scroll', () => {
            // при скролле более 400 изменяет стили кнопки
            if (window.scrollY > 400) {
                return setUpperButtonVisible('opacity-100 cursor-pointer');
            }
            return setUpperButtonVisible('opacity-0 -right-10 ');
        });
    }, []);

    return (
        <div
            className={`w-10 h-10 bg-red-400 dark:bg-yellow-600 fixed bottom-5 right-3 duration-1000 text-white rounded-sm flex justify-center items-center
            ${upperButtonVisible} hover:mb-2 hover:pb-2 shadow-md`}
            onClick={scrollToTop}
        >
            <UpArrow />
        </div>
    );
};

export default BtnScrollTop;
