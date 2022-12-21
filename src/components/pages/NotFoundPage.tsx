import React from 'react';
import LinkComponent from '../LinkComponent';

const NotFoundPage: React.FC = () => {
    return (
        <div className='px-10 md:px-40 py-16  h-96  dark:text-gray-400'>
            <h1 className='text-3xl '>Страница не найдена.</h1>
            <p className='text-lg my-4'>
                Вероятно она сейчас находится на стадии разработки. Попробуйте
                вернуться позже :)
            </p>

            <LinkComponent to='/'>На главную страницу</LinkComponent>
        </div>
    );
};

export default NotFoundPage;
