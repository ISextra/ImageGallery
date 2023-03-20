import React, {useState} from 'react';
import classes from './dropdownInputDate.module.sass'

interface DropdownFilterProps {
    content: string;
}

const DropdownInputDate: React.FC<DropdownFilterProps> = ({content}) => {
    const [isNeedShowInputs, setIsNeedShowInputs] = useState(false);
    const [DropdownFilterDateStart, setDropdownFilterDateStart] = useState("");
    const [DropdownFilterDateEnd, setDropdownFilterDateEnd] = useState("");
    const inputDateButtonRef = React.useRef<HTMLButtonElement>(null);

    function handleInputDateButtonClick() {
        setIsNeedShowInputs(!isNeedShowInputs);

        if (isNeedShowInputs) {
            if (inputDateButtonRef.current) {
                inputDateButtonRef.current.style.borderBottom = "none";
            }
        }
    }

    return (
        <div style={{position:"relative", width:"100%"}}>
            <button
                className={classes.DropdownInputDate}
                ref={inputDateButtonRef}
                onClick={handleInputDateButtonClick}
            >
                {
                    content
                }
            </button>
            {
                isNeedShowInputs ?
                    <div className={classes.DropdownOption}>
                        <input
                            type="text"
                            placeholder="От"
                            className={classes.DropdownOptionInput}
                            value={DropdownFilterDateStart}
                            onChange={event => setDropdownFilterDateStart(event.target.value)}
                        />
                        -
                        <input
                            type="text"
                            placeholder="До"
                            className={classes.DropdownOptionInput}
                            value={DropdownFilterDateEnd}
                            onChange={event => setDropdownFilterDateEnd(event.target.value)}
                        />
                    </div>
                    : null
            }
        </div>
    );
};

export default DropdownInputDate;