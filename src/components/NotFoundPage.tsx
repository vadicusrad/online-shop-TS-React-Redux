import React from 'react';

const NotFoundPage: React.FC = () => {
    return (
        <div className='px-10 md:px-40 mt-20 min-h-screen max-h-fit'>
            <h1 className='text-3xl '>Страница не найдена.</h1>
            <p className='text-lg mt-4'>
                Вероятно она сейчас находится на стадии разработки. Попробуйте
                вернуться позже :)
            </p>
        </div>
    );
};

export default NotFoundPage;
