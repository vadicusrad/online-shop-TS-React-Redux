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
    visibleProducts: Product[];
    currentProduct: Product | null;
    currentSortCondition: string;
    currentCategory: string;
    priceRange: {
        from: number;
        to: number;
    };
    loading: boolean;
    error: string | null;
}

const initialState: ProductState = {
    allProducts: [],
    visibleProducts: [],
    currentProduct: null,
    currentSortCondition: 'default',
    currentCategory: 'all',
    priceRange: {
        from: 0,
        to: 10000,
    },
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
        filterByCurrentCategory: (state) => {
            if (state.currentCategory !== 'all') {
                state.visibleProducts = state.allProducts.filter(
                    (item) => item.category === state.currentCategory
                );
            } else state.visibleProducts = state.allProducts;
        },
        filterBySearchString: (state, action: PayloadAction<string>) => {
            state.visibleProducts = state.allProducts.filter((item) =>
                item.title.toLowerCase().includes(action.payload.toLowerCase())
            );
        },
        sortProductsByCurrentSortCondition: (state) => {
            // создаю переменную для сортировки в которую кладу все продукты
            let arrayToSort = state.allProducts;
            // если выбрана котегория продуктов то в переменную для сортировки кладу продукты из выбранной категории
            if (state.visibleProducts.length) {
                arrayToSort = state.visibleProducts;
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
        filterProductsByPriceRange: (state) => {
            // создаю переменную для фильтрации в которую кладу все продукты
            let arrayToFilter = JSON.parse(
                JSON.stringify(state.visibleProducts)
            );
            if (!arrayToFilter.length) {
                arrayToFilter = JSON.stringify(state.allProducts);
            }

            const from = state.priceRange.from;
            const to = state.priceRange.to;

            // фильтирую массив на соответствие максимальной и минимальной цене
            const filteredArray = arrayToFilter
                .filter((item: { price: number }) => item.price >= from)
                .filter((item: { price: number }) => item.price <= to);

            // возвращаю в стейт отфильтрованный массив
            state.visibleProducts = filteredArray;
        },
        setCurrentCategory: (state, action: PayloadAction<string>) => {
            state.currentCategory = action.payload;
        },
        setPriceRange: (
            state,
            action: PayloadAction<{ from: number; to: number }>
        ) => {
            // приделать проверку на положительное число
            state.priceRange = action.payload;
        },
        setCurrentSortCondition: (state, action: PayloadAction<string>) => {
            state.currentSortCondition = action.payload;
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
            state.visibleProducts = action.payload;
            // получаю минимальную и максимальную цену среди полученных продуктов
            let allProductsArrayClone = JSON.parse(
                JSON.stringify(state.allProducts)
            ); // получаю независимый клон стейта
            const sortingDescendingArr = allProductsArrayClone.sort(
                (prev: { price: number }, next: { price: number }) =>
                    prev.price - next.price
            ); // сортирую клон по возрастанию цены

            // присваиваю в стейт значения наибольшей и наименьшей цены среди всех продуктов
            state.priceRange.from = sortingDescendingArr[0].price; //  первый элемент с наименьшей ценой
            state.priceRange.to = sortingDescendingArr.slice(-1)[0].price; //  последний элемент с наибольшей ценой
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

export const {
    filterByCurrentCategory,
    filterBySearchString,
    sortProductsByCurrentSortCondition,
    filterProductsByPriceRange,
    setPriceRange,
    setCurrentCategory,
    setCurrentSortCondition,
} = productSlice.actions;

export default productSlice.reducer;
