import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import logger from 'redux-logger'

import locationsSlice from "../entities/locations/model/slice"
import paintingsSlice from "../entities/paintings/model/slice";
import authorsSlice  from "../entities/authors/model/slice";
import darkModeReducer from "../shared/model/darkModeSlice";

import {AuthorsType} from "../entities/authors/model/types";
import {LocationsType} from "../entities/locations/model/types";
import {PaintingsType} from "../entities/paintings/model/types";

const rootReducer = combineReducers({
    locations: locationsSlice,
    paintings: paintingsSlice,
    authors: authorsSlice,
    settings: darkModeReducer,
})

export type RootState = {
    authors: AuthorsType,
    locations: LocationsType,
    paintings: PaintingsType
    settings: {
        darkMode: string
    }
}

export type AppDispatch = typeof store.dispatch

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export default store;
