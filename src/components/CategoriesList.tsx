import React from 'react';
import { filterByCurrentCategory } from '../features/productsSlice';

import { useAppDispatch, useAppSelector } from '../hooks';

const CategoriesList = () => {
    const allCategories = useAppSelector(
        (state) => state.categories.categories
    );
    const dispatch = useAppDispatch();
    return (
        <ul>
            <h5>CategoryList</h5>
            <li onClick={() => dispatch(filterByCurrentCategory(''))}>all</li>
            {allCategories.map((category) => {
                return (
                    <li
                        onClick={() =>
                            dispatch(filterByCurrentCategory(category))
                        }
                        key={category}
                    >
                        {category}
                    </li>
                );
            })}
        </ul>
    );
};

export default CategoriesList;
