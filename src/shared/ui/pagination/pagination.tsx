import React from 'react';
import "./pagination.sass"

interface IPaginationProps {
    darkMode: string
    currentPage: number,
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>
    cardsPerList: number,
    listLength: number,
}

const Pagination: React.FC<IPaginationProps> = (props) => {
    const {
        darkMode,
        currentPage,
        setCurrentPage,
        cardsPerList,
        listLength
    } = props

    const createArrayFromNumber = (number: number) =>
        [...Array.from(Array(number).keys())].map(x => ++x);

    const checkNextPage = (pageNumber: number) =>
        !(pageNumber > paginationPagesArray.length || pageNumber < 1);

    const paginationPages = Math.ceil(listLength / cardsPerList);
    const paginationPagesArray = createArrayFromNumber(paginationPages);

    return (
        <div className="pagination">
            <li
                className={`pagination__button previous ${darkMode}`}
                onClick={() => checkNextPage(currentPage - 1) ?
                    setCurrentPage(currentPage - 1) :
                    setCurrentPage(currentPage)}
            >
                {"<"}
            </li>
            {
                paginationPagesArray.map(page => {
                    return (page === currentPage ?
                        <li
                            className={`pagination__button ${darkMode}-active`}
                        >
                            {page}
                        </li> :
                        <li
                            className={`pagination__button ${darkMode}`}
                            onClick={(event) => {
                                const target = event.target as HTMLTextAreaElement;
                                setCurrentPage(Number(target.textContent));
                            }}
                        >
                            {page}
                        </li>)
                })
            }
            <li
                className={`pagination__button next ${darkMode}`}
                onClick={() => checkNextPage(currentPage + 1) ?
                    setCurrentPage(currentPage + 1) :
                    setCurrentPage(currentPage)}
            >
                {">"}
            </li>
        </div>
    );
};
export default Pagination;