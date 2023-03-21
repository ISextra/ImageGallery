import { createSlice } from '@reduxjs/toolkit'
import { getLocations } from "../api/getLocations";

const locationsSlice = createSlice({
    name: 'locations',
    initialState: {
        list: [],
    },
    reducers: {
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(getLocations.fulfilled, (state, action) => {
            // Add user to the state array
            state.list = action.payload;
        })
    },
})

//export const { returnLocationState } = locationsSlice.actions
export default locationsSlice.reducer