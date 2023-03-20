import {createAction, createSlice} from '@reduxjs/toolkit'
import store from "../../../app/store";


const locationsSlice = createSlice({
    name: 'location',
    initialState: {
        data: "2",
    },
    reducers: {
        createAction(state, action) {
            //@ts-ignore
            return state.locations;
        },
    }
})

//export const { returnLocationState } = locationsSlice.actions
export default locationsSlice.reducer