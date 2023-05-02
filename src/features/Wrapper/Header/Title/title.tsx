import React from 'react';
import { Link } from "react-router-dom";
import "./title.sass"
import {useAppSelector} from "../../../../app/hooks";

const Title: React.FC = () => {
    const darkMode = useAppSelector(state => state.settings.darkMode)

    return (
        <Link
            to={"/"}
            className={`title title-${darkMode}`}
        >
            ImageGallery
        </Link>
    );
};

export default Title;