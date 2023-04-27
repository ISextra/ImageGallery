import React, {useEffect, useState} from 'react';

import { useAppSelector } from "../../../app/hooks";

import Dropdown from "../../../shared/ui/dropdown/dropdown";
import Popup from "../../../shared/ui/popup/popup";

import {IFiltersDataType} from "../../../features/Filters/lib/types/intex";

interface IAuthorsDropdownProps {
    filtersData: IFiltersDataType,
    setFiltersState: React.Dispatch<React.SetStateAction<IFiltersDataType>>
}

const AuthorsDropdown: React.FC<IAuthorsDropdownProps> = (props) => {
    const {
        filtersData,
        setFiltersState
    } = props;

    const defaultValue = "Автор";
    const [elementFromSelect, setElementFromSelect] = useState<string | undefined>(defaultValue);

    const getElementFromSelect = (element: string | undefined) => {
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