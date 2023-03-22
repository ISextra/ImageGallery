import React, {useState} from 'react';
import SelectInputDateInterval from "../../../shared/ui/selectInputDateInterval/selectInputDateInterval";
import Dropdown from "../../../shared/ui/dropdown/dropdown";

const InputDateInterval = () => {
    const [isNeedShowSelect, setIsNeedShowSelect] = useState(false);

    const getFlagFromElement = (flag: boolean) => {
        setIsNeedShowSelect(flag);
    }

    return (
        <div>
            <Dropdown
                content={"Дата создания"}
                show={getFlagFromElement}
                options={
                    <SelectInputDateInterval
                        isNeedShowOptions={isNeedShowSelect}
                    />
                }
            />
        </div>
    );
};

export default InputDateInterval;