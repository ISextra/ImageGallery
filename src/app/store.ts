import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import logger from 'redux-logger'

import locationsSlice from "../entities/locations/model/slice"
import paintingsSlice from "../entities/paintings/model/slice";
import authorsSlice  from "../entities/authors/model/slice";
import darkModeReducer from "../shared/model/darkModeSlice";

const rootReducer = combineReducers({
    locations: locationsSlice,
    paintings: paintingsSlice,
    authors: authorsSlice,
    settings: darkModeReducer,
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = {
    authors: {
        list: Array<{
           id: number,
           name: string,
        }>
    },
    locations: {
        list: Array<{
            id: number,
            location: string,
        }>
    },
    paintings: {
        list: Array<{
            id: number,
            name: string
            authorId: number,
            locationId: number,
            created: string,
            imageUrl: string,
        }>
    },
    settings: {
        mode: string
    }
}
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export default store;
