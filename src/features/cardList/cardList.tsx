import React, {useEffect, useState} from 'react';
import Card from "../../shared/ui/card/card";
import Pagination from "../../shared/ui/pagination/pagination";
import {useAppSelector} from "../../app/hooks";
import {getLocationById} from "../../shared/libs/getlocationById";
import {getAuthorById} from "../../shared/libs/getAuthorById";
import {PaintingType} from "../../entities/paintings/model/types";
import "./cardList.sass"

const CardList: React.FC = () => {
    const paintings = useAppSelector((state) => state.paintings.list);
    const authors = useAppSelector((state) => state.authors.list);
    const locations = useAppSelector(state => state.locations.list);
    const darkMode = useAppSelector(state => state.settings.darkMode)

    const [currentItems, setCurrentItems] = useState<PaintingType[]>([]);

    return (
        <div>
            <div className="cardList">
                {
                    currentItems.map(item => {
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
            <Pagination
                paintings={paintings}
                setCurrentItems={setCurrentItems}
                darkMode={darkMode}
            />
        </div>
    );
};

export default CardList;