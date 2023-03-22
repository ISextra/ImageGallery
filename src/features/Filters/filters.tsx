import React, {useState} from 'react';
import classes from './filters.module.sass'
import InputPaintingName from "../../entities/paintings/ui/inputPaintingName";
import AuthorsDropdown from "../../entities/authors/ui/authorsDropdown";
import LocationsDropdown from "../../entities/locations/ui/locationsDropdown";
import InputDateInterval from "../../entities/paintings/ui/inputDateInterval";

//toDo с помощью калбека передавать тип фильтра (old)

export const Filters: React.FC = () => {
    return (
        <div className={classes.Filters}>
            <InputPaintingName/>
            <AuthorsDropdown/>
            <LocationsDropdown/>
            <InputDateInterval/>
        </div>
    );
};