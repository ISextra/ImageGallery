import {AuthorType} from "../../entities/authors/model/types";

interface IGetAuthorByIdProps {
    id: number,
    authors: Array<AuthorType>
}

export const getAuthorById = (props: IGetAuthorByIdProps) => {
    const {
        id,
        authors,
    } = props

    const elem = authors.find((author) => author.id === id) || {};

    return elem;
}