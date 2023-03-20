import React, {useEffect} from 'react';
import { Filters } from "../../features/Filters/filters";
import { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useAppDispatch} from "../../app/hooks";
import {fetchPaintingsById} from "../../entities/paintings/model/slice";

const HomePage: React.FC = () => {
    const state = useSelector(state => state);
    const dispatch = useAppDispatch();

    useEffect(() => {
        //@ts-ignore
        dispatch(fetchPaintingsById({}))
    }, []);

    return (
        <div>
            <Filters/>
        </div>
    );
};

export default HomePage;