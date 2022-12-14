import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
    return (
        <div className='px-10 md:px-40 py-10 min-h-screen max-h-fit'>
            <h1 className='text-3xl '>Страница не найдена.</h1>
            <p className='text-lg my-4'>
                Вероятно она сейчас находится на стадии разработки. Попробуйте
                вернуться позже :)
            </p>
            <button className='h-10 w-44 rounded-sm text-white bg-main-dark hover:bg-yellow-500 mb-4 mt-6'>
                <Link to='/'>На главную страницу</Link>
            </button>
        </div>
    );
};

export default NotFoundPage;
