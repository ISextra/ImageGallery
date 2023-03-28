interface IGetAuthorByIdProps {
    id: number,
    authors: Array<{
        id: number,
        name: string,
    }>
}

export const getAuthorById = (props: IGetAuthorByIdProps) => {
    const {
        id,
        authors,
    } = props

    const elem = authors.find((author) => author.id === id) || {};

    return elem;
}