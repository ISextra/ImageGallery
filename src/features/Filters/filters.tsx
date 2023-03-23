import React from 'react';
import './filters.sass'
import InputPaintingName from "../../entities/paintings/ui/inputPaintingName";
import AuthorsDropdown from "../../entities/authors/ui/authorsDropdown";
import LocationsDropdown from "../../entities/locations/ui/locationsDropdown";
import InputDateInterval from "../../entities/paintings/ui/inputDateInterval";

export const Filters: React.FC = () => {
    return (
        <div className="filters">
            <InputPaintingName/>
            <AuthorsDropdown/>
            <LocationsDropdown/>
            <InputDateInterval/>
        </div>
    );
};