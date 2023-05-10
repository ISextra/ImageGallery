import React, {useMemo} from 'react';
import "./style.sass"

interface IPaginationProps {
    darkMode: string
    currentPage: number,
    fetchPaintings: (page: number) => void,
    cardsPerList: number,
    listLength: number,
}

const Pagination: React.FC<IPaginationProps> = (props) => {
    const {
        darkMode,
        currentPage,
        fetchPaintings,
        cardsPerList,
        listLength
    } = props

    const createArrayFromNumber = (number: number) => {
        return [...Array.from(Array(number).keys())].map(x => ++x);
    }

    const checkNextPage = (pageNumber: number) => {
        return !(pageNumber > paginationPagesArray.length || pageNumber < 1);
    }

    const paginationPagesArray = useMemo(() => {
        const paginationPages = Math.ceil(listLength / cardsPerList);

        return createArrayFromNumber(paginationPages);
    }, [listLength]);

    //TODO Input заглавная буква + index.tsx style.sass
    return (
        <div className="pagination">
            <li
                className={`pagination__button previous ${darkMode}`}
                onClick={() => checkNextPage(currentPage - 1) ?
                    fetchPaintings(currentPage - 1) :
                    fetchPaintings(currentPage)}
            >
                {"<"}
            </li>
            {
                paginationPagesArray.map((page, index) => {
                    return (page === currentPage ?
                        <li
                            key={index}
                            className={`pagination__button ${darkMode}-active`}
                        >
                            {page}
                        </li> : //TODO element( block() css // не нашел библиотеки
                        <li
                            key={index}
                            className={`pagination__button ${darkMode}`}
                            onClick={(event) => {
                                const target = event.target as HTMLTextAreaElement;
                                fetchPaintings(Number(target.textContent));
                            }}
                        >
                            {page}
                        </li>)
                })
            }
            <li
                className={`pagination__button next ${darkMode}`}
                onClick={() => checkNextPage(currentPage + 1) ?
                    fetchPaintings(currentPage + 1) :
                    fetchPaintings(currentPage)}
            >
                {">"}
            </li>
        </div>
    );
};
export default Pagination;