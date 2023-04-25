import React from 'react';
import "./pagination.sass"
import ReactPaginate from "react-paginate";

interface IPaginationProps {
    onPageChange: (event: any) => void,
    pageCount: number,
    darkMode: string
}

const Pagination: React.FC<IPaginationProps> = (props) => {
    const {
        onPageChange,
        pageCount,
        darkMode,
    } = props

    return (
        <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            previousLabel="<"
            onPageChange={onPageChange}
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