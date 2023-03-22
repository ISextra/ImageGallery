import React, {useState} from 'react';
import {useAppSelector} from "../../../app/hooks";
import Dropdown from "../../../shared/ui/dropdown/dropdown";
import Select from "../../../shared/ui/select/select";

const AuthorsDropdown = () => {
    const [elementFromSelect, setElementFromSelect] = useState("Автор");

    const getFlagFromElement = (flag: boolean) => {
        setIsNeedShowSelect(flag);
    }

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
                <Select//toDo переименовать в popup, переделать sass с модулей на solid
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