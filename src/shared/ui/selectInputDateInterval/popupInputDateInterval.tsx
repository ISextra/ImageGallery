import React, {useEffect, useState} from 'react';
import './popupInputDateInterval.sass'
import {useAppSelector} from "../../../app/hooks";

interface IPopupInputDateIntervalProps {
    dateStart: string,
    setDateStart: React.Dispatch<React.SetStateAction<string>>,
    dateEnd: string,
    setDateEnd:  React.Dispatch<React.SetStateAction<string>>,
}

const PopupInputDateInterval: React.FC<IPopupInputDateIntervalProps> = (props) => {
    const {
        dateStart,
        setDateStart,
        dateEnd,
        setDateEnd
    } = props

    const [dropdownFilterDateStart, setDropdownFilterDateStart] = useState(dateStart);
    const [dropdownFilterDateEnd, setDropdownFilterDateEnd] = useState(dateEnd);
    const darkMode = useAppSelector(state => state.settings.darkMode)

    useEffect(() => {
        setDateStart(dropdownFilterDateStart);
        setDateEnd(dropdownFilterDateEnd);
    }, [dropdownFilterDateStart, dropdownFilterDateEnd])

    const checkNumberInput = (key: string) => {
        return (key >= '0' && key <= '9') ||
            ['ArrowLeft','ArrowRight','Delete','Backspace'].includes(key);
    }

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
                value={dropdownFilterDateStart}
                onChange={event => setDropdownFilterDateStart(event.target.value)}
                onKeyDown={(event) => {
                    if (!checkNumberInput(event.key)) {
                        event.preventDefault();
                    }
                }}
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
                value={dropdownFilterDateEnd}
                onChange={event => setDropdownFilterDateEnd(event.target.value)}
                onKeyDown={(event) => {
                    if (!checkNumberInput(event.key)) {
                        event.preventDefault();
                    }
                }}
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