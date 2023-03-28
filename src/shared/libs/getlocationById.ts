interface IGetLocationByIdProps {
    id: number,
    locations: Array<{
        id: number,
        location: string,
    }>
}

export const getLocationById = (props: IGetLocationByIdProps) => {
    const {
        id,
        locations,
    } = props

    const elem = locations.find((location) => location.id === id) || {};

    return elem;
}