import React, { useState, useEffect } from 'react';
import { sortProducts } from '../features/productsSlice';
import { useAppDispatch, useAppSelector } from '../hooks';

const SortingTools = () => {
    const dispatch = useAppDispatch();
    function handleChangeSelect(select: string) {
        dispatch(sortProducts(select));
    }
    const currentSelectValue = useAppSelector(
        (state) => state.products.currentSortCondition
    );
    return (
        <div className='mt-2 h-8 flex align-center px-40'>
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
    );
};

export default SortingTools;
