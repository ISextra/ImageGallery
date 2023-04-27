import React, {useEffect, useState} from 'react';

import Card from "../../shared/ui/card/card";
import Pagination from "../../shared/ui/pagination/pagination";

import {useAppSelector} from "../../app/hooks";
import {getLocationById} from "../../shared/libs/getlocationById";
import {getAuthorById} from "../../shared/libs/getAuthorById";

import {PaintingType} from "../../entities/paintings/model/types";
import {IFiltersDataType} from "../Filters/lib/types/intex";

import "./cardList.sass"

interface ICardListProps {
    filtersData: IFiltersDataType,
}

const CardList: React.FC<ICardListProps> = (props) => {
    const { filtersData } = props
    const paintings = useAppSelector((state) => state.paintings.list);
    const authors = useAppSelector((state) => state.authors.list);
    const locations = useAppSelector((state) => state.locations.list);
    const darkMode = useAppSelector((state)=> state.settings.darkMode);

    const [filteredPaintings, setFilteredPaintings] = useState<PaintingType[]>([]);
    const [currentItems, setCurrentItems] = useState<PaintingType[]>([]);

    const isPaintingExistByPaintingName = (paintingName: string | null | undefined, painting: PaintingType): boolean => {
        if (paintingName !== null && typeof paintingName !== "undefined") {
            return painting.name!.indexOf(paintingName) !== -1
        }

        //если фильтр не использован
        return true;
    }

    const isPaintingExistByAuthorName = (authorName: string | null | undefined, painting: PaintingType): boolean => {
        if (authorName !== null && typeof authorName !== "undefined") {
            const author: any = getAuthorById({
                id: painting.authorId,
                authors
            })

            if (!Object.keys(author).length) {
                return false;
            }

            return author.name.indexOf(authorName) !== -1
        }

        //если фильтр не использован
        return true;
    }

    const isPaintingExistByLocationName = (locationName: string | null | undefined, painting: PaintingType): boolean => {
        if (locationName !== null && typeof locationName !== "undefined") {

            const location: any = getLocationById({
                id: painting.locationId,
                locations
            })

            if (!Object.keys(location).length) {
                return false;
            }

            console.log(location)

            return location.location.indexOf(locationName) !== -1
        }

        //если фильтр не использован
        return true;
    }

    const isPaintingExistByDateStart = (dateStart: string | null | undefined, painting: PaintingType): boolean => {
        if (dateStart !== null && typeof dateStart !== "undefined") {
            return Number(filtersData.dateStart) <= Number(painting.created)
        }

        //если фильтр не использован
        return true;
    }

    const isPaintingExistByDateEnd = (dateEnd: string | null | undefined, painting: PaintingType): boolean => {
        if (dateEnd !== null && typeof dateEnd !== "undefined") {
            return Number(filtersData.dateEnd) >= Number(painting.created)
        }

        //если фильтр не использован
        return true;
    }

    useEffect(() => {
        setFilteredPaintings(paintings.filter((painting) => {
                    return isPaintingExistByPaintingName(filtersData.paintingName, painting) &&
                        isPaintingExistByAuthorName(filtersData.authorName, painting) &&
                        isPaintingExistByLocationName(filtersData.locationName, painting) &&
                        isPaintingExistByDateStart(filtersData.dateStart, painting) &&
                        isPaintingExistByDateEnd(filtersData.dateEnd, painting)
                }
            )
        )
    }, [paintings, filtersData])

    return (
        <div>
            <div className="cardList">
                {
                    currentItems.map(item => {
                        return <Card
                            key={item.id}
                            painting={item}
                            author={getAuthorById({
                                id: item.authorId,
                                authors
                            })}
                            location={getLocationById({
                                id: item.locationId,
                                locations
                            })}
                        />
                    })
                }
            </div>
            <Pagination
                paintings={filteredPaintings}
                setCurrentItems={setCurrentItems}
                darkMode={darkMode}
            />
        </div>
    );
};

export default CardList;