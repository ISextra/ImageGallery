import React, {useState} from 'react';
import classes from './inputDate.module.sass'

interface DropdownFilterProps {
    isNeedShowOptions: boolean;
}

const InputDate: React.FC<DropdownFilterProps> = ({isNeedShowOptions}) => {
    const [DropdownFilterDateStart, setDropdownFilterDateStart] = useState("");
    const [DropdownFilterDateEnd, setDropdownFilterDateEnd] = useState("");

    return (
        <div>
            {
                isNeedShowOptions ?
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

export default InputDate;