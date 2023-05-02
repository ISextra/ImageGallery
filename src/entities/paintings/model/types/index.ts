export type PaintingsType = {
    isLoading: boolean,
    list: Array<PaintingType>,
    totalCount: number,
}

export type PaintingType = {
    id?: number,
    name?: string
    authorId?: number,
    locationId?: number,
    created?: string,
    imageUrl?: string,
}