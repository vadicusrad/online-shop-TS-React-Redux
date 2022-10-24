import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Product } from './productsSlice';

interface CartItem extends Product {
    counter: number;
}

interface Cart {
    order: CartItem[];
}

const initialState: Cart = {
    order: [],
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemToCart: (state, action: PayloadAction<Product>) => {
            alert('yo');
            const itemInCart = state.order.find(
                (item) => item.id === action.payload.id
            );
            if (itemInCart) {
                itemInCart.counter++;
            } else {
                const newCartItem = { ...action.payload, counter: 1 };
                state.order.push(newCartItem);
            }
        },
        deleteItemFromCart: (state, action: PayloadAction<number>) => {
            state.order = state.order.filter(
                (item) => item.id !== action.payload
            );
        },
        changeCartItemCounterUp: (state, action: PayloadAction<number>) => {
            const cartItem = state.order.find(
                (item) => item.id === action.payload
            );
            if (cartItem) {
                cartItem.counter++;
            }
        },
        changeCartItemCounterDown: (state, action: PayloadAction<number>) => {
            const cartItem = state.order.find(
                (item) => item.id === action.payload
            );
            if (cartItem && cartItem.counter) {
                if (cartItem.counter === 1) {
                    cartItem.counter = 1;
                } else {
                    cartItem.counter--;
                }
            }
        },
    },
});

export const {
    addItemToCart,
    deleteItemFromCart,
    changeCartItemCounterUp,
    changeCartItemCounterDown,
} = cartSlice.actions;

export default cartSlice.reducer;