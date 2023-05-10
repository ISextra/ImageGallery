import React, {useEffect, useState} from 'react';
import { useAppSelector } from "../../../app/hooks";
import Dropdown from "../../../shared/ui/Dropdown";
import Popup from "../../../shared/ui/Popup";
import {IFiltersDataType} from "../../../features/Filters/lib/types/intex";

interface ILocationsDropdownProps {
    filtersData: IFiltersDataType,
    setFiltersState: React.Dispatch<React.SetStateAction<IFiltersDataType>>
}

const LocationsDropdown: React.FC<ILocationsDropdownProps> = (props) => {
    const {
        filtersData, setFiltersState
    } = props;

    const defaultValue = "Место";
    const [elementFromSelect, setElementFromSelect] = useState<string | undefined>(defaultValue);
    const [elementIdFromSelect, setElementIdFromSelect] = useState<string | undefined>(defaultValue);

    const getElementFromSelect = (element: string | undefined, elementId:  string | undefined) => {
        setElementFromSelect(element);
        setElementIdFromSelect(elementId)
    }

    const locations = useAppSelector(state => state.locations.list.map(item => {
        return {
            text: item.location,
            id: item.id,
        };
    }))

    useEffect(() => {
        if (elementFromSelect === defaultValue) {
            setFiltersState({
                ...filtersData,
                locationId: null
            });

            return;
        }

        setFiltersState({
            ...filtersData,
            locationId: elementIdFromSelect
        });
    }, [elementFromSelect])

    return (
        <Dropdown
            content={elementFromSelect}
            popupContent={
                <Popup
                    firstElement={defaultValue}
                    onElementClick={getElementFromSelect}
                    options={locations}
                />
            }
        />
    );
};

export default LocationsDropdown;