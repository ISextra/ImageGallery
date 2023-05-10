import React, {useEffect, useState} from 'react';
import {useAppDispatch} from "../../app/hooks";

import { Filters } from "../../features/Filters/ui";
import CardList from "../../features/cardList";

import {getLocations} from "../../entities/locations/api/getLocations";
import {getAuthors} from "../../entities/authors/api/getAuthors";

import {IFiltersDataType} from "../../features/Filters/lib/types/intex";

const HomePage: React.FC = () => {
    const dispatch = useAppDispatch();
    const localStorageFiltersData = JSON.parse(localStorage.getItem('imageGalleryFiltersData') || '{}');

    const [filtersData, setFiltersData] = useState<IFiltersDataType>({
        paintingName: null,
        authorId: null,
        locationId: null,
        dateStart: null,
        dateEnd: null,
        ...localStorageFiltersData,
    })

    useEffect(() => {
        dispatch(getLocations({}));
        dispatch(getAuthors({}));

        return () => {
            setFiltersData({
                paintingName: null,
                authorId: null,
                locationId: null,
                dateStart: null,
                dateEnd: null,
            });
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('imageGalleryFiltersData', JSON.stringify(filtersData));
        console.log(JSON.parse(localStorage.getItem('imageGalleryFiltersData')|| "{}"))
    }, [filtersData]);

    return (
        <div>
            <Filters
                filtersData={filtersData}
                setFiltersData={setFiltersData}
            />
            <CardList
                filtersData={filtersData}
            />
        </div>
    );
};

export default HomePage;