import React, {useEffect, useState} from 'react';

import InputPaintingName from "../../../entities/paintings/ui/inputPaintingName";
import AuthorsDropdown from "../../../entities/authors/ui/authorsDropdown";
import LocationsDropdown from "../../../entities/locations/ui/locationsDropdown";
import InputDateInterval from "../../../entities/paintings/ui/inputDateInterval";

import {IFiltersDataType} from "../lib/types/intex";

import './filters.sass'

interface IFiltersProps {
    setFiltersState: React.Dispatch<React.SetStateAction<IFiltersDataType>>
}

export const Filters: React.FC<IFiltersProps> = (props) => {
    const { setFiltersState } = props
    const [filtersData, setFiltersData] = useState<IFiltersDataType>({
        paintingName: null,
        authorId: null,
        locationId: null,
        dateStart: null,
        dateEnd: null
    });

    useEffect(() => {
        setFiltersState(filtersData);
    }, [filtersData])

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