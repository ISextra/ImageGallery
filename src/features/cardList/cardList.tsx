import React from 'react';
import Card from "../../shared/ui/card/card";
import {useAppSelector} from "../../app/hooks";
import {getLocationById} from "../../shared/libs/getlocationById";
import {getAuthorById} from "../../shared/libs/getAuthorById";
import "./cardList.sass"

const CardList: React.FC = () => {
    const paintings = useAppSelector((state) => state.paintings.list);
    const authors = useAppSelector((state) => state.authors.list);
    const locations = useAppSelector(state => state.locations.list);

    return (
        <div className="cardList">
            {
                paintings.map(item => {
                    return <Card
                        key={item.id}
                        painting={item}
                        author={getAuthorById({
                            id:item.authorId,
                            authors: authors
                        })}
                        location={getLocationById({
                            id:item.locationId,
                            locations: locations
                        })}
                    />
                })
            }
        </div>
    );
};

export default CardList;