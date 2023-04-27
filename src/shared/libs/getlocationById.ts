import {LocationType} from "../../entities/locations/model/types";

interface IGetLocationByIdProps {
    id: number | undefined,
    locations: Array<LocationType>
}

export const getLocationById = (props: IGetLocationByIdProps) => {
    const {
        id,
        locations,
    } = props

    const elem = locations.find((location) => location.id === id) || {};

    return elem;
}