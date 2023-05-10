import React from 'react';

import {useAppSelector} from "../../app/hooks";

import { Outlet } from "react-router-dom";
import { Header } from "./Header";

import "./style.sass";

const Wrapper: React.FC = () => {
    const darkMode = useAppSelector(state => state.settings.darkMode) || {};
    return (
        <div
            className={`wrapper wrapper-${darkMode}`}
        >
            <Header/>
            <Outlet/>
        </div>
    );
};

export default Wrapper;