import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {useParams} from "react-router-dom";

import Card from "../../shared/ui/Card";

import {getLocationById} from "../../shared/libs/getlocationById";
import {getAuthorById} from "../../shared/libs/getAuthorById";
import {getPaintings} from "../../entities/paintings/api/getPaintings";
import {getLocations} from "../../entities/locations/api/getLocations";
import {getAuthors} from "../../entities/authors/api/getAuthors";

import {AuthorType} from "../../entities/authors/model/types";
import {LocationType} from "../../entities/locations/model/types";

import "./style.sass"

const CardPage: React.FC = () => {
    const dispatch = useAppDispatch();
    const { id } = useParams()

    const darkMode = useAppSelector(state => state.settings.darkMode);
    const [painting] = useAppSelector((state) => state.paintings.list);
    const authors = useAppSelector((state) => state.authors.list);
    const locations = useAppSelector((state) => state.locations.list);

    const [author, setAuthor] = useState<AuthorType | undefined>({})
    const [location, setLocation] = useState<LocationType | undefined>({})

    useEffect(() => {
        dispatch(getLocations({}));
        dispatch(getAuthors({}));
        dispatch(getPaintings({id: Number(id)}))
    }, [dispatch, id]);

    useEffect(() => {
        setAuthor(getAuthorById({
            id: painting?.authorId,
            authors
        }));
        setLocation(getLocationById({
            id: painting?.locationId,
            locations
        }))
    }, [painting, authors, locations])

    return (
        <div
            className="cardPage"
        >
            <Card
                painting={painting}
                author={author}
                location={location}
            />
            <p
                className={`cardPage__description description-${darkMode}`}
            >
                Картина&nbsp;
                <b>{painting?.name}&nbsp;</b>
                была создана в&nbsp;
                <b>{painting?.created}&nbsp;</b>
                году автором&nbsp;
                <b>{author?.name}&nbsp;</b>
                и находится в&nbsp;
                <b>{location?.location}.</b>
            </p>

        </div>
);
};

export default CardPage;