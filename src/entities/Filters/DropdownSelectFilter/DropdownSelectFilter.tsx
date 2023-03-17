import React, {useState} from 'react';
import classes from "./DropdownSelectFilter.module.sass";

interface DropdownFilterProps {
    content: string;
}

const DropdownSelectFilter: React.FC<DropdownFilterProps> = ({content}) => {
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
            <option
                value="grapefruit"
            >Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
        </select>
    );
};

export default DropdownSelectFilter;