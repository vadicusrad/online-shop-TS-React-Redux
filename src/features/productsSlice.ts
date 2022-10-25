import {
    createAsyncThunk,
    createSlice,
    isRejectedWithValue,
} from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: { rate: number; count: number };
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

interface ProductState {
    allProducts: Product[];
    filteredProducts: Product[];
    loading: boolean;
    error: string | null;
}

const initialState: ProductState = {
    allProducts: [],
    filteredProducts: [],
    loading: false,
    error: null,
};

export const getProducts = createAsyncThunk<
    Product[],
    undefined,
    { rejectValue: string }
>('products/getProducts', async function (_, { rejectWithValue }) {
    const response = await fetch('https://fakestoreapi.com/products');
    if (!response.ok) {
        return rejectWithValue('Server error!');
    }
    const data = await response.json();
    return data;
});

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        filterByCurrentCategory: (state, action: PayloadAction<string>) => {
            state.filteredProducts = state.allProducts.filter(
                (item) => item.category === action.payload
            );
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getProducts.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.loading = false;
            state.allProducts = action.payload;
        });
    },
});

export const { filterByCurrentCategory } = productSlice.actions;

export default productSlice.reducer;
