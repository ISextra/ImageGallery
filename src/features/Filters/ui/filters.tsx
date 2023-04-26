import React, {useEffect, useState} from 'react';
import './filters.sass'
import InputPaintingName from "../../../entities/paintings/ui/inputPaintingName";
import AuthorsDropdown from "../../../entities/authors/ui/authorsDropdown";
import LocationsDropdown from "../../../entities/locations/ui/locationsDropdown";
import InputDateInterval from "../../../entities/paintings/ui/inputDateInterval";
import {IFiltersData} from "../lib/types/intex";

interface IFiltersProps {
    setFiltersState: React.Dispatch<React.SetStateAction<IFiltersData>>
}

export const Filters: React.FC<IFiltersProps> = (props) => {
    const { setFiltersState } = props
    const [filtersData, setFiltersData] = useState<IFiltersData>({
        paintingName: null,
        authorName: null,
        locationName: null,
        dateStart: null,
        dateEnd: null
    });

    useEffect(() => {
        console.log(filtersData);
        setFiltersState(filtersData);
    }, [filtersData])

    useEffect(() => {

    }, [])

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