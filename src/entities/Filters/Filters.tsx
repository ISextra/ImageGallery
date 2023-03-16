import React from 'react';
import classes from './Filters.module.sass'
import NameFilter from "./NameFilter/NameFilter";

export const Filters: React.FC = () => {
    return (
        <div className={classes.Filters}>
            <NameFilter/>
            <NameFilter/>
            <NameFilter/>
            <NameFilter/>
        </div>
    );
};