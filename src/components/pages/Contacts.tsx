import React from 'react';
import LinkComponent from '../LinkComponent';

const Contacts = () => {
    return (
        <div>
            <h1 className='text-3xl '>Контакты</h1>
            <p className='text-lg my-4'>
                Связаться со мной можно в{' '}
                <a
                    target='blank'
                    rel='noreferrer noopener'
                    href='https://t.me/Vadicus'
                    className='text-blue-500'
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
                    className='text-blue-500'
                >
                    GitHub.
                </a>
            </p>
            <LinkComponent children='На главную' to='/' />
        </div>
    );
};

export default Contacts;
