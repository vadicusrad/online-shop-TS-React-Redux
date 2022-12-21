import React from 'react';
import LinkComponent from '../LinkComponent';

const About = () => {
    return (
        <div className='px-10 md:px-40 my-16'>
            <h1 className='text-3xl '>О приложении</h1>
            <div className='text-lg my-4'></div>
            <p>
                Это пет-проект для отработки навыков написания работающего,
                красивого кода.
            </p>
            <h2 className='font-semibold my-2'>
                Используются следующие технологии:
            </h2>
            <ul className='marker:text-blue-400 list-disc pl-5'>
                <li>JavaScript</li>
                <li>React</li>
                <li>ReduxToolkit</li>
                <li>Redux Persist</li>
                <li>Tailwind CSS</li>
                <li>React router dom 6</li>
                <li>Toastify</li>
            </ul>

            <h2 className='font-semibold my-2'>
                Реализованы следующие функции:
            </h2>
            <ul className='marker:text-gray-400 list-disc pl-5'>
                <li>Получение и отображение данных из удаленного сервера</li>
                <li>Фильтрация товаров по цене</li>
                <li>Фильтрация товаров по категории</li>
                <li>Сортировка товаров по цене или рейтингу</li>
                <li>Добавление товаров в корзину</li>
                <li>
                    Логика корзины: изменение количества, удаление товаров из
                    корзины
                </li>
                <li>Автоматический расчет стоимости товаров в корзине</li>
                <li>Адаптация стилей под разные экраны</li>
                <li>
                    Мини карточки для оповещения пользователя о происходящих
                    событиях
                </li>
                <li>Темный режим</li>
                <li>
                    Сохранение информации о товарах корзины и выбранной теме в
                    памяти браузера
                </li>
                <li>
                    Реализованы иные маленькие, но классные функции, например
                    кнопка возврата наверх, запрет скролла при открытом меню,
                    возрат наверх при смене страницы, копирование ссылки на
                    страницу товара по клику на кнопку и т.д.
                </li>
            </ul>
            <div className='mt-5 flex space-x-4'>
                <LinkComponent to='/'>На главную</LinkComponent>

                <LinkComponent to='/contacts'>Мои контакты</LinkComponent>
            </div>
        </div>
    );
};

export default About;
