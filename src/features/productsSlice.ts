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
    currentProduct: Product | null;

    loading: boolean;
    error: string | null;
}

const initialState: ProductState = {
    allProducts: [],
    filteredProducts: [],
    currentProduct: null,

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

export const getSingleProduct = createAsyncThunk(
    'products/getSingleProduct',
    async function (productId: number, { rejectWithValue }) {
        const response = await fetch(
            `https://fakestoreapi.com/products/${productId}`
        );
        if (!response.ok) {
            return rejectWithValue('Server error!');
        }
        const data = await response.json();
        return data;
    }
);

export const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        filterByCurrentCategory: (state, action: PayloadAction<string>) => {
            state.filteredProducts = state.allProducts.filter(
                (item) => item.category === action.payload
            );
        },
        filterBySearchString: (state, action: PayloadAction<string>) => {
            console.log(action.payload);
            state.filteredProducts = state.allProducts.filter((item) =>
                item.title.toLowerCase().includes(action.payload.toLowerCase())
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

        builder.addCase(getSingleProduct.pending, (state) => {
            state.currentProduct = null;
            state.loading = true;
            state.error = null;
        });
        builder.addCase(getSingleProduct.fulfilled, (state, action) => {
            state.loading = false;
            state.currentProduct = action.payload;
        });
    },
});

export const { filterByCurrentCategory, filterBySearchString } =
    productSlice.actions;

export default productSlice.reducer;
