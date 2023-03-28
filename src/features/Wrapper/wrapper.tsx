import React from 'react';
import { Outlet } from "react-router-dom";
import { Header } from "./Header/header";
import "./wrapper.sass";
import {useAppSelector} from "../../app/hooks";

const Wrapper: React.FC = () => {
    const darkMode = useAppSelector(state => state.settings.darkMode) || {};

    return (
        <div
            className="wrapper"
            style={
                darkMode === "light"
                    ? {background: "white"}
                    : {}
            }
        >
            <Header/>
            <Outlet/>
        </div>
    );
};

export default Wrapper;