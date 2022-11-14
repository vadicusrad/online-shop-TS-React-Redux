import React from 'react';
import {
    filterByCurrentCategory,
    sortProducts,
} from '../features/productsSlice';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../hooks';

interface ModalProp {
    onCloseModal: () => void;
    categoryModal: boolean;
}

const CategoriesList: React.FC<ModalProp> = ({
    onCloseModal,
    categoryModal,
}) => {
    const allCategories = useAppSelector(
        (state) => state.categories.categories
    );

    const dispatch = useAppDispatch();

    if (categoryModal) {
        return (
            <>
                <div
                    onClick={(e) => {
                        e.stopPropagation();
                        onCloseModal();
                    }}
                    className='fixed top-0 left-0 w-full h-full bg-slate-800 opacity-25 z-100 text-black pointer-events-auto'
                />
                <ul
                    onClick={(e) => e.stopPropagation()}
                    className='absolute top-14 left-40 w-2/6 bg-white opacity-100 py-5 px-5 flex  flex-col drop-shadow-lg text-black z-40'
                >
                    <h3 className='font-semibold'>Категории</h3>
                    <Link
                        to='/'
                        className='w-full h-16 m-2 flex justify-left items-center cursor-pointer hover:bg-slate-300 px-4'
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
                                className='w-full h-16 flex justify-left items-center cursor-pointer hover:bg-slate-300 px-4'
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
                {/* // </div> */}
            </>
        );
    }
    return null;
};

export default CategoriesList;
