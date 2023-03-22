import {createAsyncThunk} from "@reduxjs/toolkit";
import {FETCH_LOCATIONS} from "../model/actions";

interface IFetchLocationsById {
    page?: number,
}

export const getLocations = createAsyncThunk(
    `${FETCH_LOCATIONS}`,
    async (payload: IFetchLocationsById, thunkAPI) => {
        const response = await fetch(`${process.env.REACT_APP_FETCH_URL}/locations`)
        //@ts-ignore
        return await response.json()
    }
)