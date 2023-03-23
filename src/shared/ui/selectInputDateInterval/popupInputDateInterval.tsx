import React, {useState} from 'react';
import './popupInputDateInterval.sass'

const PopupInputDateInterval: React.FC = () => {
    const [DropdownFilterDateStart, setDropdownFilterDateStart] = useState("");
    const [DropdownFilterDateEnd, setDropdownFilterDateEnd] = useState("");

    return (
        <div className="popup-inputs">
            <input
                type="text"
                placeholder="От"
                className="popup-inputs__input"
                value={DropdownFilterDateStart}
                onChange={event => setDropdownFilterDateStart(event.target.value)}
            />
            -
            <input
                type="text"
                placeholder="До"
                className="popup-inputs__input"
                value={DropdownFilterDateEnd}
                onChange={event => setDropdownFilterDateEnd(event.target.value)}
            />
        </div>
    );
};

export default PopupInputDateInterval;