import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AdaptedProduct } from './productsSlice';

interface IFavorits {
    favorites: AdaptedProduct[];
}

const initialState: IFavorits = {
    favorites: [],
};

export const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addItemToFavorites: (state, action: PayloadAction<AdaptedProduct>) => {
            const itemInFavorites = state.favorites.find(
                (item) => item.id === action.payload.id
            );
            if (itemInFavorites) {
                return;
            } else {
                const newFavoritesItem = { ...action.payload };
                state.favorites.push(newFavoritesItem);
            }
        },
        deleteItemFromFavorites: (state, action: PayloadAction<number>) => {
            state.favorites = state.favorites.filter(
                (item) => item.id !== action.payload
            );
        },
        clearFavorites: (state) => {
            state.favorites = [];
        },
    },
});

export const { addItemToFavorites, deleteItemFromFavorites, clearFavorites } =
    favoritesSlice.actions;

export default favoritesSlice.reducer;
