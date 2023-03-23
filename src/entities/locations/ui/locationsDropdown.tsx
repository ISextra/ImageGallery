import React, { useState } from 'react';
import { useAppSelector } from "../../../app/hooks";
import Dropdown from "../../../shared/ui/dropdown/dropdown";
import Popup from "../../../shared/ui/popup/popup";

const LocationsDropdown = () => {
    const [elementFromSelect, setElementFromSelect] = useState("Место");

    const getElementFromSelect = (element: string) => {
        setElementFromSelect(element);
    }

    const locations = useAppSelector(state => state.locations.list.map(item => {
        return {
            text: item.location,
            id: item.id,
        };
    }))

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