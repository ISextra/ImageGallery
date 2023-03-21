import {createAsyncThunk} from "@reduxjs/toolkit";

interface IFetchAuthorsById {
    page?: number,
}

export const getAuthors = createAsyncThunk(
    'authors/getAuthors',
    async (payload: IFetchAuthorsById, thunkAPI) => {
        const response = await fetch("https://test-front.framework.team/authors")
        //@ts-ignore
        return await response.json()
    }

    //переменная окружения .env для url
    //вынести 'authors/getAuthors' для каждого бизнесс элемента в константы по типу /locations/model/actions.ts
    //доделать типизацию в store.ts
    //с помощью калбека передавать тип фильтра
    //вынести dropdownFilter (и возможно все составляющие) в shared
)