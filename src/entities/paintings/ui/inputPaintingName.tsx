import React, {useEffect, useState} from 'react';
import Input from "../../../shared/ui/Input";
import {IFiltersDataType} from "../../../features/Filters/lib/types/intex";

interface IInputPaintingNameProps {
    filtersData: IFiltersDataType,
    setFiltersState: React.Dispatch<React.SetStateAction<IFiltersDataType>>
}

const InputPaintingName: React.FC<IInputPaintingNameProps> = (props) => {
    const {
        filtersData,
        setFiltersState,
    } = props

    const defaultValue = "Наименование";
    const localStorageFiltersData = JSON.parse(localStorage.getItem('imageGalleryFiltersData') || '{}');
    const inputContent = localStorageFiltersData.paintingName || "";

    const [paintingName, setPaintingName] = useState(inputContent);

    useEffect(() => {
        if (paintingName === defaultValue) {
            setFiltersState({
                ...filtersData,
                paintingName: null,
            });

            return;
        }

        setFiltersState({
            ...filtersData,
            paintingName: paintingName,
        });
    }, [paintingName]);
    // TODO убрать, добавить const onChange = (name, value) в родителя, вызвать в child


    return (
        <Input
            defaultValue={defaultValue}
            content={paintingName}
            dataOnChange={setPaintingName}
        />
    );
};

export default InputPaintingName;