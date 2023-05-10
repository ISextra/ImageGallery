import React, {useEffect, useState} from 'react';

import { useAppSelector } from "../../../app/hooks";

import Dropdown from "../../../shared/ui/Dropdown";
import Popup from "../../../shared/ui/Popup";

import {IFiltersDataType} from "../../../features/Filters/lib/types/intex";
import {getAuthorById} from "../../../shared/libs/getAuthorById";

interface IAuthorsDropdownProps {
    filtersData: IFiltersDataType,
    setFiltersState: React.Dispatch<React.SetStateAction<IFiltersDataType>>
}

const AuthorsDropdown: React.FC<IAuthorsDropdownProps> = (props) => {
    const {
        filtersData,
        setFiltersState
    } = props;

    const authorsList = useAppSelector((state) => state.authors.list);

    const defaultValue = "Автор";

    const localStorageFiltersData = JSON.parse(localStorage.getItem('imageGalleryFiltersData') || '{}');
    const localStorageAuthor = getAuthorById({
        id: Number(localStorageFiltersData.authorId),
        authors: authorsList,
    }).name || defaultValue;

    const [elementFromSelect, setElementFromSelect] = useState<string | undefined>(localStorageAuthor);
    const [elementIdFromSelect, setElementIdFromSelect] = useState<string | undefined>(defaultValue);

    const getElementFromSelect = (element: string | undefined, elementId: string | undefined) => {
        setElementFromSelect(element);
        setElementIdFromSelect(elementId)
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
                authorId: null
            });

            return;
        }

        setFiltersState({
            ...filtersData,
            authorId: elementIdFromSelect
        });

    }, [elementFromSelect])

    return (
        <Dropdown
            content={elementFromSelect}
            popupContent={
                <Popup
                    firstElement={defaultValue}
                    onElementClick={getElementFromSelect}
                    options={authors}
                />
            }
        />
    );
};


export default AuthorsDropdown;