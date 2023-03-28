import React, {useState} from 'react';
import './popupInputDateInterval.sass'
import {useAppSelector} from "../../../app/hooks";

const PopupInputDateInterval: React.FC = () => {
    const [DropdownFilterDateStart, setDropdownFilterDateStart] = useState("");
    const [DropdownFilterDateEnd, setDropdownFilterDateEnd] = useState("");
    const darkMode = useAppSelector(state => state.settings.darkMode)

    return (
        <div
            className="popup-inputs"
            style={
                darkMode === "light"
                    ? {
                        color: "black",
                        background: "white",
                        border: "2px solid black"
                    }
                    : {}
            }
        >
            <input
                type="text"
                placeholder="От"
                className="popup-inputs__input"
                value={DropdownFilterDateStart}
                onChange={event => setDropdownFilterDateStart(event.target.value)}
                style={
                    darkMode === "light"
                        ? {
                            color: "black",
                            background: "#EFEFEF",
                            border: "1px solid black"
                        }
                        : {}
                }
            />
            -
            <input
                type="text"
                placeholder="До"
                className="popup-inputs__input"
                value={DropdownFilterDateEnd}
                onChange={event => setDropdownFilterDateEnd(event.target.value)}
                style={
                    darkMode === "light"
                        ? {
                            color: "black",
                            background: "#EFEFEF",
                            border: "1px solid black"
                        }
                        : {}
                }
            />
        </div>
    );
};

export default PopupInputDateInterval;