import React, {useEffect, useState} from 'react';
import { useAppSelector } from "../../../app/hooks";
import Dropdown from "../../../shared/ui/dropdown/dropdown";
import Popup from "../../../shared/ui/popup/popup";
import {IFiltersData} from "../../../features/Filters/lib/types/intex";

interface IAuthorsDropdownProps {
    filtersData: IFiltersData,
    setFiltersState: React.Dispatch<React.SetStateAction<IFiltersData>>
}

const AuthorsDropdown: React.FC<IAuthorsDropdownProps> = (props) => {
    const {
        filtersData,
        setFiltersState
    } = props;

    const defaultValue = "Автор";
    const [elementFromSelect, setElementFromSelect] = useState(defaultValue);

    const getElementFromSelect = (element: string) => {
        setElementFromSelect(element);
    }

    const authors = useAppSelector(state => state.authors.list.map(item => {
        return {
            text: item.name,
            id: item.id,
        };
    }))

    useEffect(() => {
        if (elementFromSelect === defaultValue) {
            setFiltersState({
                ...filtersData,
                authorName: null
            });

            return;
        }

        setFiltersState({
            ...filtersData,
            authorName: elementFromSelect
        });
    }, [elementFromSelect])

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


export default AuthorsDropdown;