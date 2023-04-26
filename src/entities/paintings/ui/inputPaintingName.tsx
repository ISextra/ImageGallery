import React, {useEffect, useState} from 'react';
import Input from "../../../shared/ui/input/input";
import {IFiltersData} from "../../../features/Filters/lib/types/intex";

interface IInputPaintingNameProps {
    filtersData: IFiltersData,
    setFiltersState: React.Dispatch<React.SetStateAction<IFiltersData>>
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
                authorName: null,
            });

            return;
        }

        setFiltersState({
            ...filtersData,
            authorName: paintingName,
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