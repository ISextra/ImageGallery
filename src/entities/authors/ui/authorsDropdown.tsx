import React, { useState } from 'react';
import { useAppSelector } from "../../../app/hooks";
import Dropdown from "../../../shared/ui/dropdown/dropdown";
import Popup from "../../../shared/ui/popup/popup";

const AuthorsDropdown = () => {
    const [elementFromSelect, setElementFromSelect] = useState("Автор");

    const getElementFromSelect = (element: string) => {
        setElementFromSelect(element);
    }

    const authors = useAppSelector(state => state.authors.list.map(item => {
        return {
            text: item.name,
            id: item.id,
        };
    }))

    // shared/ui/DropdownWithDateInterval
    return (
        <Dropdown
            content={elementFromSelect}
            popupContent={
                <Popup
                    onElementClick={getElementFromSelect}
                    options={authors}
                />
            }
        />
    );
};

//вынести в отдельный компонент
//getAuthors


export default AuthorsDropdown;