import React from 'react';
import { Link } from "react-router-dom";
import "./title.sass"

const Title: React.FC = () => {
    return (
        <Link to={"/"} className="title">
            ImageGallery
        </Link>
    );
};

export default Title;