import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './features/cartSlice';
import categoriesSlice from './features/categoriesSlice';

import productsSlice from './features/productsSlice';

export const store = configureStore({
    reducer: {
        products: productsSlice,
        categories: categoriesSlice,
        cart: cartSlice,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
