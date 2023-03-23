import React, {useEffect} from 'react';
import { Filters } from "../../features/Filters/filters";
import { useAppDispatch } from "../../app/hooks";
import { getPaintings } from "../../entities/paintings/api/getPaintings";
import { getLocations } from "../../entities/locations/api/getLocations";
import { getAuthors } from "../../entities/authors/api/getAuthors";
import CardList from "../../features/cardList/cardList";
import Card from "../../shared/ui/card/card";
import store from "../../app/store";

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
            <CardList/>
        </div>
    );
};

export default HomePage;