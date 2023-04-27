import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import "./cardPage.sass"
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {getLocationById} from "../../shared/libs/getlocationById";
import Card from "../../shared/ui/card/card";
import {getAuthorById} from "../../shared/libs/getAuthorById";
import {PaintingType} from "../../entities/paintings/model/types";
import {getPaintingById} from "../../shared/libs/getPaintingById";
import {getPaintings} from "../../entities/paintings/api/getPaintings";
import {getLocations} from "../../entities/locations/api/getLocations";
import {getAuthors} from "../../entities/authors/api/getAuthors";


const CardPage: React.FC = () => {
    const dispatch = useAppDispatch();
    const { id } = useParams()
    const darkMode = useAppSelector(state => state.settings.darkMode);
    const paintings = useAppSelector((state) => state.paintings.list);
    const authors = useAppSelector((state) => state.authors.list);
    const locations = useAppSelector((state) => state.locations.list);
    const [painting, setPainting] = useState<PaintingType | undefined>({})

    useEffect(() => {
        dispatch(getLocations({}));
        dispatch(getAuthors({}));
        dispatch(getPaintings({}));
    }, [dispatch]);

    useEffect(() => {
        setPainting(getPaintingById({
            id,
            paintings
        }))
    }, [id, paintings])

    return (
        <div
            className={`cardPage ${darkMode}`}
        >
            <Card
                painting={painting}
                author={getAuthorById({
                    id: painting!.authorId,
                    authors
                })}
                location={getLocationById({
                    id: painting!.locationId,
                    locations
                })}
            />
        </div>
    );
};

export default CardPage;