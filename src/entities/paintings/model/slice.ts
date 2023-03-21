import { createSlice } from '@reduxjs/toolkit'
import { getPaintings } from "../api/getPaintings";

const paintingsSlice = createSlice({
    name: 'paintings',
    initialState: {
       list: [],
    },
    reducers: {
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(getPaintings.fulfilled, (state, action) => {
            // Add user to the state array
            state.list = action.payload;
        })
    },
})

export const {  } = paintingsSlice.actions;
export default paintingsSlice.reducer;