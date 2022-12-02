import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
    filterByCurrentCategory,
    filterProductsByPriceRange,
    setCurrentCategory,
    setCurrentSortCondition,
    setPriceRange,
    sortProductsByCurrentSortCondition,
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

    const priceRange = useAppSelector((state) => state.products.priceRange);

    function handleUseAllfilters() {
        dispatch(filterByCurrentCategory());
        dispatch(filterProductsByPriceRange());
        dispatch(sortProductsByCurrentSortCondition());
    }

    function handleSetPriceRange(newPriceRange: { from: number; to: number }) {
        dispatch(setPriceRange(newPriceRange));
    }

    function handleSetSortSelect(select: string) {
        dispatch(setCurrentSortCondition(select));
        handleUseAllfilters();
    }

    function handleSetCurrentCategory(select: string) {
        dispatch(setCurrentCategory(select));
        handleUseAllfilters();
    }

    return (
        <div className='mt-2  flex flex-col md:flex-row align-center px-5 md:px-40 space-x-6'>
            <div>
                <span>Категории:</span>
                <select
                    className='h-6 border ml-2'
                    name='categorySelect'
                    id='categorySelect'
                    onChange={(e) => handleSetCurrentCategory(e.target.value)}
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
                    onChange={(e) => handleSetSortSelect(e.target.value)}
                >
                    <option value='default'>По умолчанию</option>
                    <option value='descending'>Сначала дорогие</option>
                    <option value='ascending'>Сначала дешевые</option>
                    <option value='byrating'>По рейтингу</option>
                </select>
            </div>
            <div className=''>
                Цена:
                <span>
                    <input
                        className='h-6 border ml-2 w-20'
                        type='number'
                        onChange={(e) =>
                            handleSetPriceRange({
                                ...priceRange,
                                from: +e.target.value,
                            })
                        }
                        placeholder={`от ${priceRange.from}`}
                    />
                </span>
                <span>
                    До:{' '}
                    <input
                        className='h-6 border ml-2 w-24'
                        type='number'
                        onChange={(e) =>
                            handleSetPriceRange({
                                ...priceRange,
                                to: +e.target.value,
                            })
                        }
                        placeholder={`до ${priceRange.to}`}
                    />
                </span>
                <button
                    className='h-6 border ml-2 w-6'
                    onClick={() => handleUseAllfilters()}
                >
                    ok
                </button>
            </div>
        </div>
    );
};

export default SortingTools;
