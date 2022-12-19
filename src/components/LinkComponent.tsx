import React from 'react';
import { Link } from 'react-router-dom';

type LinkProps = {
    children: string;
    to: string;
    className?: string;
};

const LinkComponent = ({ children, to, className }: LinkProps) => {
    return (
        <Link
            className={`${className} text-sm sm:h-10 sm:text-base flex items-center justify-center h-10 max-w-fit px-2 rounded-sm bg-gray-400 text-white dark:text-gray-200 dark:hover:text-yellow-600 hover:bg-lime-500 dark:bg-inherit border-inherit border dark:hover:border dark:hover:border-yellow-600 mb-4 mt-6 duration-200 shadow-md`}
            to={to}
        >
            {children}
        </Link>
    );
};

export default LinkComponent;
