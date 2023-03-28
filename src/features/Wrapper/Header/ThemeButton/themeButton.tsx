import React from 'react';
import './themeButton.sass'
import {useAppDispatch, useAppSelector} from "../../../../app/hooks";
import {toggleDarkMode} from "../../../../shared/model/darkModeSlice";
import Image from "../../../../shared/ui/image/image";


const ThemeButton: React.FC = () => {
    const dispatch = useAppDispatch();
    const darkMode = useAppSelector(state => state.settings.darkMode)

    let themeImage = darkMode === "dark"
        ? require('./darkModeImage_white.png')
        : require('./darkModeImage_black.png');

    return (
        <div
            className="theme-button"
            onClick={() => {dispatch(toggleDarkMode())}}
            style={
                darkMode === "light"
                    ? { color: "black" }
                    : {}
            }
        >
            <Image src={themeImage} alt={"themeButton"}/>
        </div>
    );
};

export default ThemeButton;