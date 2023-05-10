import React, {useEffect, useState} from 'react';

import InputPaintingName from "../../../entities/paintings/ui/inputPaintingName";
import AuthorsDropdown from "../../../entities/authors/ui/authorsDropdown";
import LocationsDropdown from "../../../entities/locations/ui/locationsDropdown";
import InputDateInterval from "../../../entities/paintings/ui/inputDateInterval";

import {IFiltersDataType} from "../lib/types/intex";

import './style.sass'

interface IFiltersProps {
    filtersData: IFiltersDataType,
    setFiltersData: React.Dispatch<React.SetStateAction<IFiltersDataType>>
}

export const Filters: React.FC<IFiltersProps> = (props) => {
    const {
        filtersData,
        setFiltersData
    } = props

    return (
        <div className="filters">
            <InputPaintingName
                filtersData={filtersData}
                setFiltersState={setFiltersData}
            />
            <AuthorsDropdown
                filtersData={filtersData}
                setFiltersState={setFiltersData}
            />
            <LocationsDropdown
                filtersData={filtersData}
                setFiltersState={setFiltersData}
            />
            <InputDateInterval
                filtersData={filtersData}
                setFiltersState={setFiltersData}
            />
        </div>
    );
};