import {createAsyncThunk} from "@reduxjs/toolkit";

interface IFetchPaintingsById {
    page?: number,
}

export const getPaintings = createAsyncThunk(
    'paintings/fetchPaintingsById',
    async (payload: IFetchPaintingsById, thunkAPI) => {
        const response = await fetch("https://test-front.framework.team/paintings")
        //@ts-ignore
        return await response.json()
    }
)