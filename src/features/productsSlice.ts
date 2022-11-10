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
    image: string;
    category: string;
    rating: { rate: number; count: number };
    onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

interface ProductState {
    allProducts: Product[];
    filteredProducts: Product[];
    currentProduct: Product | null;
    currentSortCondition: string;
    loading: boolean;
    error: string | null;
}

const initialState: ProductState = {
    allProducts: [],
    filteredProducts: [],
    currentProduct: null,
    currentSortCondition: 'default',
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
            // state.currentSortCondition = 'default';
        },
        filterBySearchString: (state, action: PayloadAction<string>) => {
            state.filteredProducts = state.allProducts.filter((item) =>
                item.title.toLowerCase().includes(action.payload.toLowerCase())
            );
            // state.currentSortCondition = 'default';
        },
        sortProducts: (state, action: PayloadAction<string>) => {
            state.currentSortCondition = action.payload;

            // создаю переменную для сортировки в которую кладу все продукты
            let arrayToSort = state.allProducts;
            // если выбрана котегория продуктов то в переменную для сортировки кладу продукты из выбранной категории
            if (state.filteredProducts.length) {
                arrayToSort = state.filteredProducts;
            }
            // три типа сортировки в зависимости от типа экшена
            if (state.currentSortCondition === 'descending') {
                arrayToSort = arrayToSort.sort(
                    (prev, next) => next.price - prev.price
                );
            }
            if (state.currentSortCondition === 'ascending') {
                arrayToSort = arrayToSort.sort(
                    (prev, next) => prev.price - next.price
                );
            }
            if (state.currentSortCondition === 'byrating') {
                arrayToSort = arrayToSort.sort(
                    (prev, next) => next.rating.rate - prev.rating.rate
                );
            }
            if (state.currentSortCondition === 'default') {
                arrayToSort = arrayToSort.sort(
                    (prev, next) => prev.id - next.id
                );
            }
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

export const { filterByCurrentCategory, filterBySearchString, sortProducts } =
    productSlice.actions;

export default productSlice.reducer;
