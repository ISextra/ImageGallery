import {createAsyncThunk} from "@reduxjs/toolkit";
import {FETCH_PAINTINGS} from "../model/actions";

interface IFetchPaintingsById {
    page?: number,
}

export const getPaintings = createAsyncThunk(
    `${FETCH_PAINTINGS}`,
    async (payload: IFetchPaintingsById, thunkAPI) => {
        const response = await fetch(`${process.env.REACT_APP_FETCH_URL}/paintings`)
        //@ts-ignore
        return await response.json()
    }
)