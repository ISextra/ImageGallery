import { createSlice} from '@reduxjs/toolkit'
import { getAuthors } from "../api/getAuthors";

const authorsSlice = createSlice({
    name: 'authors',
    initialState: {
        list: [],
    },
    reducers: {
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(getAuthors.fulfilled, (state, action) => {
            // Add user to the state array
            state.list = action.payload;
        })
    },
})

//export const { authorsSlice } = authorsSlice.actions
export default authorsSlice.reducer