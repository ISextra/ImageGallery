import React from 'react';
import PopupInputDateInterval from "../../../shared/ui/selectInputDateInterval/popupInputDateInterval";
import Dropdown from "../../../shared/ui/dropdown/dropdown";

const InputDateInterval = () => {
    return (
        <Dropdown
            content={"Дата создания"}
            popupContent={
                <PopupInputDateInterval/>
            }
        />
    );
};

export default InputDateInterval;