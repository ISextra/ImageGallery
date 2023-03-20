import React from 'react';
import classes from './filters.module.sass'
import NameFilter from "./NameFilter/NameFilter";
import DropdownSelectFilter from "./DropdownSelectFilter/dropdownSelectFilter";
import DropdownInputDate from "./DropdownInputDate/dropdownInputDate";

export const Filters: React.FC = () => {
    return (
        <div className={classes.Filters}>
            <NameFilter/>
            {/*<DropdownSelectFilter*/}
            {/*    content="Автор"*/}
            {/*/>*/}
            {/*<DropdownSelectFilter*/}
            {/*    content="Место"*/}
            {/*/>*/}
            <DropdownInputDate
                content="Дата"
            />
        </div>
    );
};