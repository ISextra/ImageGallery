import {createAsyncThunk} from "@reduxjs/toolkit";

interface IFetchLocationsById {
    page?: number,
}

export const getLocations = createAsyncThunk(
    'paintings/fetchPaintingsById',
    async (payload: IFetchLocationsById, thunkAPI) => {
        const response = await fetch("https://test-front.framework.team/locations")
        //@ts-ignore
        return await response.json()
    }
)