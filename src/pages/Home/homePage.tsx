import React, {useEffect} from 'react';
import { Filters } from "../../features/Filters/filters";
import { useAppDispatch } from "../../app/hooks";
import { getPaintings } from "../../entities/paintings/api/getPaintings";
import { getLocations } from "../../entities/locations/api/getLocations";
import { getAuthors } from "../../entities/authors/api/getAuthors";

const HomePage: React.FC = () => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        //@ts-ignore
        dispatch(getPaintings({}));
        dispatch(getLocations({}));
        dispatch(getAuthors({}));
    }, []);

    return (
        <div>
            <Filters/>
        </div>
    );
};

export default HomePage;