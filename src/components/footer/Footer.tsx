import React from 'react';
import { Link } from 'react-router-dom';
import GithubIcon from '../../icons/GithubIcon';
import TelegramIcon from '../../icons/TelegramIcon';
import VkIcon from '../../icons/VkIcon';
import Logo from '../Logo';
import LinksWrapper from './LinksWrapper';

const Footer = () => {
    return (
        <footer className='w-full bg-stone-500 dark:bg-slate-800 text-text-light dark:text-gray-500 px-5 sm:px-10 md:px-20 xl:px-40 py-5 md:py-10 pb-12'>
            <Logo />
            <div className='flex flex-row justify-between md:mt-6'>
                <div className='flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8 w-1/2 md:w-2/3 text-xs sm:text-sm md:text-base'>
                    <LinksWrapper>
                        <Link to='delivery'>Доставка</Link>
                        <Link to='payment'>Оплата</Link>
                        <Link to='pick-up-points'>Пункты выдачи</Link>
                    </LinksWrapper>
                    <LinksWrapper>
                        <Link to='about'>О компании</Link>
                        <Link to='about'>Обратная связь</Link>
                        <Link to='return-goods'>Возврат товаров</Link>
                    </LinksWrapper>
                    <LinksWrapper>
                        <Link to='contacts'>Контакты</Link>
                        <Link to='personal-area'>Личный кабинет</Link>
                    </LinksWrapper>
                </div>
                <div className='bg-gray w-1/2 md:w-1/3 ml-12 md:ml-5 flex flex-col space-y-3 text-xl '>
                    <h3 className='text-xl md:text-3xl font-semibold'>
                        Контакты
                    </h3>
                    <div className='flex space-x-4'>
                        <a
                            target='blank'
                            rel='noreferrer noopener'
                            href='https://t.me/Vadicus'
                        >
                            <TelegramIcon />
                        </a>
                        <a
                            target='blank'
                            rel='noreferrer noopener'
                            href='https://github.com/vadicusrad'
                        >
                            <GithubIcon />
                        </a>
                        <a
                            target='blank'
                            rel='noreferrer noopener'
                            href='https://vk.ru'
                        >
                            <VkIcon />
                        </a>
                    </div>
                    <a
                        className='text-sm md:text-xl'
                        href='tel:+7 800 800 80 80'
                    >
                        +7 800 800 80 80
                    </a>
                    <span className='text-sm md:text-xl'>
                        {' '}
                        Санкт-Петербург Невский 12
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
