import React, {useEffect, useState} from 'react';
import Card from "../../shared/ui/card/card";
import {useAppSelector} from "../../app/hooks";
import ReactPaginate from "react-paginate";
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
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 12;

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(paintings.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(paintings.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, paintings]);

    const handlePageClick = (event: any) => {
        const newOffset = (event.selected * itemsPerPage) % paintings.length;
        setItemOffset(newOffset);
    }

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
            <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                previousLabel="<"
                onPageChange={handlePageClick}
                pageCount={pageCount}
                pageRangeDisplayed={5}
                marginPagesDisplayed={1}
                renderOnZeroPageCount={null}
                containerClassName="pagination"
                pageLinkClassName="pagination__button"
                previousLinkClassName="pagination__button previous"
                nextLinkClassName="pagination__button next"
                activeLinkClassName="pagination__button active"
            />
        </div>
    );
};

export default CardList;