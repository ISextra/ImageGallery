import React, {useEffect, useState} from 'react';
import Input from "../../../shared/ui/input/input";
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

    const [paintingName, setPaintingName] = useState("");

    useEffect(() => {
        if (paintingName === "") {
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

    return (
        <Input
            content="Наименование"
            dataOnChange={setPaintingName}
        />
    );
};

export default InputPaintingName;