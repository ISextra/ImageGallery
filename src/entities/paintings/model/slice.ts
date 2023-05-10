import { createSlice } from '@reduxjs/toolkit'
import {getPaintings} from "../api/getPaintings";
import {getPaintingsCount} from "../api/getPaintingsCount";

const paintingsSlice = createSlice({
    name: 'paintings',
    initialState: {
        isLoading: true,
        list: [],
        totalCount: 0,
    },
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(getPaintings.pending, (state) => {
            state.isLoading = true;
        });

        builder.addCase(getPaintings.fulfilled, (state, action) => {
            state.isLoading = false;
            state.list = action.payload;
        });

        builder.addCase(getPaintingsCount.fulfilled, (state, action) => {
            state.totalCount = action.payload;
        });
    },
})

export default paintingsSlice.reducer;