import {createAsyncThunk} from "@reduxjs/toolkit";
import {GET_PAINTINGS_COUNT} from "../model/actions";
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

export const getPaintingsCount = createAsyncThunk(
    `${GET_PAINTINGS_COUNT}`,
    async (payload: IFetchPaintings) => {
        const response = await postman.get(`/`, {
            params: {
                ...payload,
                _page: 1,
                _limit: 1e9,
            }
        });

        return response.data.length;
    }
)