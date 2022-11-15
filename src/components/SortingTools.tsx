import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    filterByCurrentCategory,
    sortProducts,
} from '../features/productsSlice';
import { useAppDispatch, useAppSelector } from '../hooks';

const SortingTools = () => {
    const dispatch = useAppDispatch();

    const currentSelectValue = useAppSelector(
        (state) => state.products.currentSortCondition
    );

    const allCategories = useAppSelector(
        (state) => state.categories.categories
    );

    function handleChangeSelect(select: string) {
        dispatch(sortProducts(select));
    }

    function handleChangeCategory(select: string) {
        dispatch(filterByCurrentCategory(select));
        handleChangeSelect(currentSelectValue);
    }

    return (
        <div className='mt-2 h-8 flex align-center px-40 space-x-6'>
            <div>
                <span>Категории:</span>
                <select
                    className='h-6 border ml-2'
                    name='categorySelect'
                    id='categorySelect'
                    onChange={(e) => handleChangeCategory(e.target.value)}
                >
                    <option value='all'>all</option>

                    {allCategories.map((category) => {
                        return (
                            <option key={category} value={category}>
                                {category}
                            </option>
                        );
                    })}
                </select>
            </div>
            <div className=''>
                <span>Сортировка:</span>
                <select
                    value={currentSelectValue}
                    className='h-6 border ml-2'
                    name='sortSelect'
                    id='sortSelect'
                    onChange={(e) => handleChangeSelect(e.target.value)}
                >
                    <option value='default'>По умолчанию</option>
                    <option value='descending'>Сначала дорогие</option>
                    <option value='ascending'>Сначала дешевые</option>
                    <option value='byrating'>По рейтингу</option>
                </select>
            </div>
        </div>
    );
};

export default SortingTools;
