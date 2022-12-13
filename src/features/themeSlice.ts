import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// const getTheme = () => {
//     const theme = `${window?.localStorage?.getItem('theme')}`;

//     if (theme === 'dark') {
//         return theme;
//     }
//     return 'light';
// };

const initialState = {
    theme: 'light',
    // getTheme(),
};

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        setTheme: (state, action: PayloadAction<string>) => {
            state.theme = action.payload;
            // localStorage.setItem('theme', action.payload);
        },
    },
});

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;
