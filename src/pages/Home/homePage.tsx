import React, {useEffect, useState} from 'react';
import {useAppDispatch} from "../../app/hooks";

import { Filters } from "../../features/Filters/ui/filters";
import CardList from "../../features/cardList/cardList";

import {getPaintings} from "../../entities/paintings/api/getPaintings";
import {getLocations} from "../../entities/locations/api/getLocations";
import {getAuthors} from "../../entities/authors/api/getAuthors";

const HomePage: React.FC = () => {
    const dispatch = useAppDispatch();

    const [filtersData, setFiltersData] = useState({});

    useEffect(() => {
        dispatch(getPaintings({}));
        dispatch(getLocations({}));
        dispatch(getAuthors({}));
    }, [dispatch]);

    return (
        <div>
            <Filters
                setFiltersState={setFiltersData}
            />
            <CardList
                filtersData={filtersData}
            />
        </div>
    );
};

export default HomePage;