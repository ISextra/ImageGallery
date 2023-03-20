import React from 'react';
import { Link } from "react-router-dom";
import classes from "./Title.module.sass"

const Title: React.FC = () => {
    return (
        <Link to={"/"} className={classes.Ttl}>
            ImageGallery
        </Link>
    );
};

export default Title;