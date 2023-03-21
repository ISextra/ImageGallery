import React, {useState} from 'react';
import classes from "./NameFilter.module.sass";

const NameFilter: React.FC = () => {
    const [nameFilterValue, setNameFilterValue] = useState("");

    return (
        <input
            type="text"
            placeholder="Наименование"
            className={classes.NameFilter}
            value={nameFilterValue}
            onChange={event => setNameFilterValue(event.target.value)}
        />
    );
};

export default NameFilter;
