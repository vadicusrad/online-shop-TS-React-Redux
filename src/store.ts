import { configureStore } from '@reduxjs/toolkit';
import cartSlice from './features/cartSlice';
import productsSlice from './features/productsSlice';
import themeSlice from './features/themeSlice';

export const store = configureStore({
    reducer: {
        products: productsSlice,
        cart: cartSlice,
        theme: themeSlice,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
