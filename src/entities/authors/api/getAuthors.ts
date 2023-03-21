import {createAsyncThunk} from "@reduxjs/toolkit";

interface IFetchAuthorsById {
    page?: number,
}

export const getAuthors = createAsyncThunk(
    'paintings/fetchPaintingsById',
    async (payload: IFetchAuthorsById, thunkAPI) => {
        const response = await fetch("https://test-front.framework.team/authors")
        //@ts-ignore
        return await response.json()
    }
)