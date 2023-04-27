import {PaintingType} from "../../entities/paintings/model/types";

interface IGetPaintingByIdProps {
    id: string | undefined,
    paintings: Array<PaintingType>
}

export const getPaintingById = (props: IGetPaintingByIdProps) => {
    const {
        id,
        paintings,
    } = props

    return paintings.find((painting) => String(painting.id) === id) || {};
}