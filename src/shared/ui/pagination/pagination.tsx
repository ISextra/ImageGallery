import React, {useEffect, useState} from 'react';
import ReactPaginate from "react-paginate";
import {PaintingType} from "../../../entities/paintings/model/types";
import "./pagination.sass"

interface IPaginationProps {
    paintings: PaintingType[],
    setCurrentItems:  React.Dispatch<React.SetStateAction<PaintingType[]>>
    darkMode: string
}

const Pagination: React.FC<IPaginationProps> = (props) => {
    const {
        paintings,
        setCurrentItems,
        darkMode,
    } = props

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
            pageLinkClassName={`pagination__button ${darkMode}`}
            previousLinkClassName={`pagination__button previous ${darkMode}`}
            nextLinkClassName={`pagination__button next ${darkMode}`}
            activeLinkClassName={`pagination__button ${darkMode}-active`}
        />
    );
};

export default Pagination;