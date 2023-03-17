import React from 'react';
import classes from './Filters.module.sass'
import NameFilter from "./NameFilter/NameFilter";
import DropdownSelectFilter from "./DropdownSelectFilter/DropdownSelectFilter";
import DropdownInputDate from "./DropdownInputDate/DropdownInputDate";

export const Filters: React.FC = () => {
    return (
        <div className={classes.Filters}>
            <NameFilter/>
            <DropdownSelectFilter
                content={"Автор"}
            />
            <DropdownSelectFilter
                content={"Место"}
            />
            <DropdownInputDate
                content={"Дата"}
            />
        </div>
    );
};