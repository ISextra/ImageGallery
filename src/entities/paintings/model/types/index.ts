export type PaintingsType = {
    list: Array<PaintingType>
}

export type PaintingType = {
    id: number,
    name: string
    authorId: number,
    locationId: number,
    created: string,
    imageUrl: string,
}