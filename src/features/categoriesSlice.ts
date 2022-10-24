import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

type Category = string;

type CategoryList = {
    categories: Category[];
    loading: boolean;
    error: string | null;
};

const initialState: CategoryList = {
    categories: [],
    loading: false,
    error: null,
};

export const getAllCategories = createAsyncThunk<
    Category[],
    undefined,
    { rejectValue: string }
>('categories/getAllCategories', async function (_, { rejectWithValue }) {
    const response = await fetch(
        'https://fakestoreapi.com/products/categories'
    );
    if (!response.ok) {
        return rejectWithValue('Server error!');
    }
    const data = await response.json();

    return data;
});

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllCategories.pending, (state) => {
            state.loading = true;
            state.error = null;
        });
        builder.addCase(getAllCategories.fulfilled, (state, action) => {
            state.loading = false;
            state.categories = action.payload;
        });
    },
});

export default categoriesSlice.reducer;
