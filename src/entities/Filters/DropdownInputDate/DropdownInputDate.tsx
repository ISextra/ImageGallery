import React, {useState} from 'react';
import classes from './DropdownInputDate.module.sass'

interface DropdownFilterProps {
    content: string;
}

const DropdownInputDate: React.FC<DropdownFilterProps> = ({content}) => {
    const [isNeedShowInputs, setIsNeedShowInputs] = useState(false);
    const [DropdownFilterDateStart, setDropdownFilterDateStart] = useState("");
    const [DropdownFilterDateEnd, setDropdownFilterDateEnd] = useState("");

    return (
        <div
            className={classes.DropdownInputDate}
        >
            <button
                className={classes.DropdownInputDateButton}
                onClick={() => setIsNeedShowInputs(!isNeedShowInputs)}
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