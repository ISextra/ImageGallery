import React, {useEffect, useState} from 'react';
import { useAppSelector } from "../../../app/hooks";
import Dropdown from "../../../shared/ui/dropdown/dropdown";
import Popup from "../../../shared/ui/popup/popup";
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

    const getElementFromSelect = (element: string | undefined) => {
        setElementFromSelect(element);
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
                locationName: null
            });

            return;
        }

        setFiltersState({
            ...filtersData,
            locationName: elementFromSelect
        });
    }, [elementFromSelect])

    return (
        <Dropdown
            content={elementFromSelect}
            popupContent={
                <Popup
                    onElementClick={getElementFromSelect}
                    options={locations}
                />
            }
        />
    );
};

export default LocationsDropdown;