import React, { useState, useEffect } from 'react';
import { sortProducts } from '../features/productsSlice';
import { useAppDispatch } from '../hooks';

const SortingTools = () => {
    const dispatch = useAppDispatch();
    function handleChangeSelect(select: string) {
        dispatch(sortProducts(select));
    }

    return (
        <div className='mt-2 h-8 flex align-center'>
            <span>Сортировка:</span>
            <select
                className='h-6 border ml-2'
                name='sortSelect'
                id='sortSelect'
                onChange={(e) => handleChangeSelect(e.target.value)}
            >
                <option value=''>По умолчанию</option>
                <option value='descending'>Сначала дорогие</option>
                <option value='ascending'>Сначала дешевые</option>
                <option value='byrating'>По рейтингу</option>
            </select>
        </div>
    );
};

export default SortingTools;
