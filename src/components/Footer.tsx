import React from 'react';
import { Link } from 'react-router-dom';
import emailIcon from '../icons/emailIcon';
import githubIcon from '../icons/githubIcon';
import telegramIcon from '../icons/telegramIcon';
import vkIcon from '../icons/vkIcon';

const Footer = () => {
    return (
        <div className='w-full bg-blue-900 h-96 text-white px-40 py-10'>
            <a href='/' className='text-5xl  cursor-pointer m-2'>
                LOGO
            </a>
            <div className='flex justify-between'>
                <div className='flex mt-6 space-x-12'>
                    <span className='flex flex-col space-y-4'>
                        <Link to='delivery'>Доставка</Link>
                        <Link to='payment'>Оплата</Link>
                        <Link to='pick-up-points'>Пункты выдачи</Link>
                    </span>
                    <span className='flex flex-col space-y-4'>
                        <Link to='about'>О компании</Link>

                        <Link to='about'>Обратная связь</Link>
                        <Link to='return-goods'>Возврат товаров</Link>
                    </span>
                    <span className='flex flex-col space-y-4'>
                        <Link to='contacts'>Контакты</Link>

                        <Link to='personal-area'>Личный кабинет</Link>
                    </span>
                </div>
                <div className='bg-gray w-80 flex flex-col space-y-3 text-xl'>
                    <h3 className='text-3xl font-semibold'>Контакты</h3>
                    <a href='tel:+7 800 800 80 80'>+7 800 800 80 80</a>
                    <span className=''> Санкт-Петербург Невский 12</span>
                    <div className='flex space-x-4'>
                        <a
                            target='blank'
                            rel='noreferrer noopener'
                            href='https://t.me/Vadicus'
                        >
                            {telegramIcon}
                        </a>
                        <a
                            target='blank'
                            rel='noreferrer noopener'
                            href='https://github.com/vadicusrad'
                        >
                            {githubIcon}
                        </a>
                        <a
                            target='blank'
                            rel='noreferrer noopener'
                            href='https://vk.ru'
                        >
                            {vkIcon}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
