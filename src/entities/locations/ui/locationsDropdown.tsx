import React, {SetStateAction, useEffect, useState} from 'react';
import {useAppSelector} from "../../../app/hooks";
import Dropdown from "../../../shared/ui/dropdown/dropdown";
import Select from "../../../shared/ui/select/select";

const LocationsDropdown = () => {
    const [isNeedShowSelect, setIsNeedShowSelect] = useState(false);
    const [elementFromSelect, setElementFromSelect] = useState("Место");

    const getFlagFromElement = (flag: boolean) => {
        setIsNeedShowSelect(flag);
    }

    const getElementFromSelect = (element: string) => {
        setElementFromSelect(element);
    }

    const getLocations = useAppSelector(state => state.locations.list.map(item => {
        return {
            text: item.location,
            id: item.id,
        };
    }))//toDo переименовать в locations

    return (
        <div>
            <Dropdown
                content={elementFromSelect}
                show={getFlagFromElement}
                options={
                    <Select
                        isNeedShowOptions={isNeedShowSelect}
                        onElementClick={getElementFromSelect}
                        options={getLocations}
                    />
                }
            />
        </div>
    );
};

export default LocationsDropdown;