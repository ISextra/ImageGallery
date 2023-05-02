import {createAsyncThunk} from "@reduxjs/toolkit";
import {FETCH_PAINTINGS} from "../model/actions";
import {postman} from "../../../app";

interface IFetchPaintings {
    id?: number,
    q?: string | null,
    created_gte?: string | null,
    created_lte?: string | null,
    _page?: number,
    _limit?: number,
    authorId?: string | null,
    locationId?: string | null,
}

export const getPaintings = createAsyncThunk(
    `${FETCH_PAINTINGS}`,
    async (payload: IFetchPaintings) => {
        const response = await postman.get(`/`, {
            params: payload
        });

        return response.data;
    }
)