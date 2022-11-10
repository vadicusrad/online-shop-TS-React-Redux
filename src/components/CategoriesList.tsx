import React from 'react';
import {
    filterByCurrentCategory,
    sortProducts,
} from '../features/productsSlice';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks';

interface ModalProp {
    onCloseModal: () => void;
}

const CategoriesList: React.FC<ModalProp> = ({ onCloseModal }) => {
    const allCategories = useAppSelector(
        (state) => state.categories.categories
    );

    const dispatch = useAppDispatch();
    return (
        <div
            onClick={() => onCloseModal()}
            className='fixed top-0 left-0 w-full h-full bg-slate-800/25 z-40'
        >
            <ul
                onClick={(e) => e.stopPropagation()}
                className='absolute top-52 left-40 w-2/6 h-2/3 bg-white opacity-100 p-10 flex space-x-5 flex-col drop-shadow-lg

                '
            >
                <h3 className='font-semibold'>Категории</h3>
                <Link
                    to='/'
                    className='w-40 h-16 m-2 flex justify-left items-center cursor-pointer '
                    onClick={() => {
                        dispatch(filterByCurrentCategory(''));
                        onCloseModal();
                    }}
                >
                    all
                </Link>
                {allCategories.map((category) => {
                    return (
                        <Link
                            to='/'
                            className='w-40 h-16 m-2 flex justify-left items-center cursor-pointer'
                            onClick={() => {
                                dispatch(filterByCurrentCategory(category));

                                onCloseModal();
                            }}
                            key={category}
                        >
                            {category}
                        </Link>
                    );
                })}
            </ul>
        </div>
    );
};

export default CategoriesList;
