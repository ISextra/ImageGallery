import React from 'react';
import classes from "./cardPage.module.sass"
import { useSelector } from 'react-redux';
import store from "../../app/store";
import locationsSlice from "../../entities/locations/model/slice.js"
import paintingsSlice from "../../entities/paintings/model/slice.js";


const CardPage: React.FC = () => {

    return (
        <div className={classes.cardPage}>
            Card Not Found
        </div>
    );
};

export default CardPage;