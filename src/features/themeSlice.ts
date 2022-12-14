import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ITheme {
    theme: string;
}

const initialState: ITheme = {
    theme: 'light',
};

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setTheme: (state, action: PayloadAction<string>) => {
            state.theme = action.payload;
        },
    },
});

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;
