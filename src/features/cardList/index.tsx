import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../app/hooks";

import Card from "../../shared/ui/Card";
import Pagination from "../../shared/ui/Pagination";

import {getLocationById} from "../../shared/libs/getlocationById";
import {getAuthorById} from "../../shared/libs/getAuthorById";
import {getPaintings} from "../../entities/paintings/api/getPaintings";
import {getPaintingsCount} from "../../entities/paintings/api/getPaintingsCount";

import {IFiltersDataType} from "../Filters/lib/types/intex";

import "./style.sass"

interface ICardListProps {
    filtersData: IFiltersDataType,
}

const CardList: React.FC<ICardListProps> = (props) => {
    const { filtersData } = props;
    const dispatch = useAppDispatch();

    const paintings = useAppSelector((state) => state.paintings.list);
    const authors = useAppSelector((state) => state.authors.list);
    const locations = useAppSelector((state) => state.locations.list);
    const listLength = useAppSelector((state) => state.paintings.totalCount);
    const darkMode = useAppSelector((state)=> state.settings.darkMode);

    const [currentPage, setCurrentPage] = useState<number>(1);

    const cardsPerList = 12;

    useEffect(() => {
        dispatch(getPaintingsCount({
            q: filtersData.paintingName,
            authorId: filtersData.authorId,
            locationId: filtersData.locationId,
            created_gte: filtersData.dateStart,
            created_lte: filtersData.dateEnd,
        }));
        fetchPaintings(1);
    }, [filtersData]);


    const fetchPaintings = (page: number) => {
        dispatch(getPaintings({
            q: filtersData.paintingName,
            authorId: filtersData.authorId,
            locationId: filtersData.locationId,
            created_gte: filtersData.dateStart,
            created_lte: filtersData.dateEnd,
            _page: page,
            _limit: cardsPerList,
        }));
        setCurrentPage(page);
    }

    return (
        <div>
            <div className="cardList">
                {
                    paintings.map(item => {
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
                darkMode={darkMode}
                fetchPaintings={fetchPaintings}
                currentPage={currentPage}
                cardsPerList={cardsPerList}
                listLength={listLength}
            />
        </div>
    );
};

export default CardList;