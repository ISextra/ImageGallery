import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    darkMode: localStorage.getItem("darkMode") || "dark",
}

export const darkModeSlice = createSlice({
    name: 'darkMode',
    initialState,
    reducers: {
        toggleDarkMode: (state) => {
            state.darkMode = state.darkMode === "dark" ? "light" : "dark";
            localStorage.setItem("darkMode", state.darkMode);
        }
    },
});

export const { toggleDarkMode } = darkModeSlice.actions
export default darkModeSlice.reducer
