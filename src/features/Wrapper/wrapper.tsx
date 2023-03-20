import React from 'react';
import { Outlet } from "react-router-dom";
import { Header } from "./Header/header";
import classes from "./wrapper.module.sass";

const Wrapper: React.FC = () => {
    return (
        <div className={classes.wrapper}>
            <Header/>

            <Outlet/>
        </div>
    );
};

export default Wrapper;