import {createAsyncThunk} from "@reduxjs/toolkit";
import {FETCH_AUTHORS} from "../model/actions";

interface IFetchAuthorsById {
    page?: number,
}

export const getAuthors = createAsyncThunk(
    `${FETCH_AUTHORS}`,
    async (payload: IFetchAuthorsById, thunkAPI) => {
        const response = await fetch(`${process.env.REACT_APP_FETCH_URL}/authors`)
        //@ts-ignore
        return await response.json()
    }
)