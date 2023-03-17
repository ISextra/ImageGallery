import React, {useState} from 'react';
import classes from "./DropdownSelectFilter.module.sass";

interface DropdownFilterProps {
    content: string;
    options: DropdownOptionDescription[]; // Array<DropdownOptionDescription>
}

interface DropdownOptionDescription {
    text: string,
    color: string,
}

const DropdownSelectFilter: React.FC<DropdownFilterProps> = (props) => {
    const {content, options} = props;

    const [DropdownFilterValue, setDropdownFilterValue] = useState("");

    return (
        <select
            className={classes.DropdownSelectFilter}
            value={DropdownFilterValue}
            onChange={event => setDropdownFilterValue(event.target.value)}
        >
            <option
                value=""
                disabled
                selected
                hidden
                className={classes.SelectOption}
            >
                {content}
            </option>
        </select>
    );
};

export default DropdownSelectFilter;