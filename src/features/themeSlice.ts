import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const getTheme = () => {
    const theme = `${window?.localStorage?.getItem('theme')}`;
    if (['light', 'dark'].includes(theme)) return theme;

    const userMedia = window.matchMedia('(prefers-color-scheme: light)');
    if (userMedia.matches) return 'light';

    return 'dark';

    // if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    //     document.documentElement.classList.add('dark')
    //   } else {
    //     document.documentElement.classList.remove('dark')
    //   }
};

const initialState = {
    theme: getTheme(),
};

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: (state, action: PayloadAction<string>) => {
            state.theme = action.payload;
        },
    },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
