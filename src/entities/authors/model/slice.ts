import {createAction, createSlice} from '@reduxjs/toolkit'
import store from "../../../app/store";
import {getPaintings} from "../../paintings/api/getPaintings";


const locationsSlice = createSlice({
    name: 'locations',
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

//export const { returnLocationState } = locationsSlice.actions
export default locationsSlice.reducer