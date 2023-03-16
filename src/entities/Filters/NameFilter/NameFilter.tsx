import React, {useState} from 'react';
import classes from "./NameFilter.module.sass";

const NameFilter: React.FC = () => {
    const [nameFilter, setNameFilter] = useState("Наименование");

    return (
        <input className={classes.NameFilter}>
        </input>
    );
};

export default NameFilter;