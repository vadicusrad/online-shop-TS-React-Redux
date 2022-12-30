import React from 'react';

interface ILinksWrapper {
    children: React.ReactNode;
}

const LinksWrapper = ({ children }: ILinksWrapper) => {
    return (
        <span className='flex flex-col space-y-2 md:space-y-4'>{children}</span>
    );
};

export default LinksWrapper;
