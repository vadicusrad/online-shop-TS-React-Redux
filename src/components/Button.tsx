import React from 'react';

export const Button = (props: any) => {
    return (
        <button className='h-10 w-full bg-main-light text-text-light no-sens:opacity-0  hover:bg-yellow-500 group-hover:opacity-100 '>
            {props}
        </button>
    );
};
