import React from 'react';
import { Outlet } from "react-router-dom";
import { Header } from "./Header/header";
import "./wrapper.sass";

const Wrapper: React.FC = () => {
    return (
        <div className="wrapper">
            <Header/>
            <Outlet/>
        </div>
    );
};

export default Wrapper;