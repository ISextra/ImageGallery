import React, {useEffect, useState} from 'react';
import PopupInputDateInterval from "../../../shared/ui/selectInputDateInterval/popupInputDateInterval";
import Dropdown from "../../../shared/ui/dropdown/dropdown";
import {IFiltersData} from "../../../features/Filters/lib/types/intex";

interface IInputDateIntervalProps {
    filtersData: IFiltersData,
    setFiltersState: React.Dispatch<React.SetStateAction<IFiltersData>>
}

const InputDateInterval: React.FC<IInputDateIntervalProps> = (props) => {
    const {
        filtersData,
        setFiltersState,
    } = props

    const [dateStart, setDateStart] = useState("");
    const [dateEnd, setDateEnd] = useState("");

    useEffect(() => {
        if (dateStart === "") {
            setFiltersState({
                ...filtersData,
                dateStart: null,
            });

            return;
        }

        setFiltersState({
            ...filtersData,
            dateStart: dateStart,
        });
    }, [dateStart]);

    useEffect(() => {
        if (dateEnd === "") {
            setFiltersState({
                ...filtersData,
                dateEnd: null,
            });

            return;
        }

        setFiltersState({
            ...filtersData,
            dateEnd: dateEnd,
        });
    }, [dateEnd]);

    return (
        <Dropdown
            content={"Дата создания"}
            popupContent={
                <PopupInputDateInterval
                    dateStart={dateStart}
                    setDateStart={setDateStart}
                    dateEnd={dateEnd}
                    setDateEnd={setDateEnd}
                />
            }
        />
    );
};

export default InputDateInterval;