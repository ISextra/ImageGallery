import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import logger from 'redux-logger'

import locationsSlice from "../entities/locations/model/slice"
import paintingsSlice from "../entities/paintings/model/slice";
import authorsSlice  from "../entities/authors/model/slice";

const rootReducer = combineReducers({
    location: locationsSlice,
    paintings: paintingsSlice,
    authors: authorsSlice,
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = {
    authors: {
        list: Array<{
           id: number,
           name: string,
        }>
    },
    location: {
        list: Array<{
            id: number,
            location: string,
        }>
    },
    paintings: {
        list: [

        ]
    }
}
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export default store;
