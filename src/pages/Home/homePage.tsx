import React, {useEffect, useState} from 'react';
import { Filters } from "../../features/Filters/ui/filters";
import { useAppDispatch } from "../../app/hooks";
import { getPaintings } from "../../entities/paintings/api/getPaintings";
import { getLocations } from "../../entities/locations/api/getLocations";
import { getAuthors } from "../../entities/authors/api/getAuthors";
import CardList from "../../features/cardList/cardList";

const HomePage: React.FC = () => {
    const dispatch = useAppDispatch();
    const [filtersData, setFiltersData] = useState({})

    useEffect(() => {
        dispatch(getPaintings({}));
        dispatch(getLocations({}));
        dispatch(getAuthors({}));
    }, []);

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