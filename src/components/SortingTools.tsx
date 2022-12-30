import React, { useState, useEffect } from 'react';
import {
    filterByCurrentCategory,
    filterProductsByPriceRange,
    setCurrentCategory,
    setCurrentSortCondition,
    setPriceRange,
    sortProductsByCurrentSortCondition,
} from '../features/productsSlice';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import { ICategory } from '../features/productsSlice';
const SortingTools = () => {
    const dispatch = useAppDispatch();

    const currentSelectValue = useAppSelector(
        (state) => state.products.currentSortCondition
    );

    const allCategories = useAppSelector(
        (state) => state.products.allCategories.categories
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

    const selectorClasses =
        'h-6 border dark:bg-slate-600 dark:text-gray-400 dark:border-none rounded-sm ml-2';

    const priceInputClasses =
        'h-6 border ml-2   dark:bg-slate-600 dark:text-gray-400 dark:border-none rounded-sm pl-1';

    return (
        <div className='flex flex-col md:items-end md:flex-row md:flex-wrap align-center md:px-5 space-y-3 dark:text-gray-300'>
            <div>
                <span>Категории:</span>
                <select
                    className={selectorClasses}
                    name='categorySelect'
                    id='categorySelect'
                    onChange={(e) => handleSetCurrentCategory(e.target.value)}
                >
                    <option value='all'>all</option>

                    {allCategories.map((category: ICategory) => {
                        return (
                            <option key={category} value={category}>
                                {category}
                            </option>
                        );
                    })}
                </select>
            </div>
            <div className='md:mx-6 '>
                <span>Сортировка:</span>
                <select
                    value={currentSelectValue}
                    className={selectorClasses}
                    name='sortSelect'
                    id='sortSelect'
                    onChange={(e) => handleSetSortSelect(e.target.value)}
                >
                    <option value='default'>по умолчанию</option>
                    <option value='descending'>сначала дорогие</option>
                    <option value='ascending'>сначала дешевые</option>
                    <option value='byrating'>по рейтингу</option>
                </select>
            </div>
            <div className='flex space-x-2'>
                <span>
                    Цена:
                    <input
                        className={`${priceInputClasses} w-16 sm:w-20`}
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
                    До:
                    <input
                        className={`${priceInputClasses} w-20 sm:w-24`}
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
                    className='h-6 border px-2 rounded-sm text-sm dark:hover:text-yellow-600 dark:hover:border-yellow-600 duration-300'
                    onClick={() => handleUseAllfilters()}
                >
                    OK
                </button>
            </div>
        </div>
    );
};

export default SortingTools;
