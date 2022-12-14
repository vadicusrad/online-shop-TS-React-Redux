import React from 'react';
import { Link } from 'react-router-dom';

const Contacts = () => {
    return (
        <div className='px-10 md:px-40 py-10 min-h-screen max-h-fit'>
            <h1 className='text-3xl '>Контакты</h1>
            <p className='text-lg my-4'>
                Связаться со мной можно в{' '}
                <a
                    target='blank'
                    rel='noreferrer noopener'
                    href='https://t.me/Vadicus'
                    className='text-blue'
                >
                    Телеграм
                </a>
            </p>
            <p>
                А так же прикладываю ссылку на{' '}
                <a
                    target='blank'
                    rel='noreferrer noopener'
                    href='https://github.com/vadicusrad'
                    className='text-blue'
                >
                    GitHub.
                </a>
            </p>
            <button className='h-10 w-44 rounded-sm text-white bg-main-dark hover:bg-yellow-500 mb-4 mt-6'>
                <Link to='/'>На главную страницу</Link>
            </button>
        </div>
    );
};

export default Contacts;
